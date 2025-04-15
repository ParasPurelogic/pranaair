"use client"

import { useState } from "react"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm";

export default function RentalAirMonitorPage() {
  const [selectedOption, setSelectedOption] = useState("Monitor - 10 units for 24 Months")
  const [formData, setFormData] = useState({
    fullname: "",
    yourphone: "",
    youremail: "",
    yourorganisation: "",
    yourmessage: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry. Our team will contact you soon.")
  }

  return (
    <main className="rental-air-monitor-page">
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  <strong>
                    Purchase an air quality monitor - the lowest price @Rs.1499 with a minimum quantity on
                  </strong>{" "}
                  <span className="bold_text">Rental Service</span>
                </h1>
                <p>
                  Rentable smart indoor air quality monitoring equipment can help you identify dangerous air pollution!
                </p>
                <ul className="rate_list">
                  <li>Low-Cost</li>
                  <li>Time Saving</li>
                  <li>Hassle Free</li>
                </ul>
                <a className="pocket_buy_btn" href="#get_in_touch">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box">
              <div className="rental_fetaure_box">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/wifi.png"
                    width="25"
                    height="22"
                    alt="wifi"
                  />
                </span>
                Wifi Connectivity
              </div>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-air-quality-monitor-for-rent.png"
                alt="Rental Air Monitor"
                className="img-fluid"
              />
              <div className="rental_fetaure_box rental_fetaure_box2">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/app.png"
                    width="14"
                    height="26"
                    alt="app"
                  />
                </span>
                Mobile App Enabled
              </div>
              <div className="rental_fetaure_box rental_fetaure_box3">
                <span className="featured_icon">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/data.png"
                    width="20"
                    height="20"
                    alt="data"
                  />
                </span>
                Real-time &amp; historic data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Rental the Best Option Section */}
      <section className="best-option-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>What Makes Rental the Best Option?</h2>
            <p>
              Obtain your companys real-time air quality statistics without any ownership hassles. Remotely access and
              evaluate the data.
            </p>
          </div>

          <div className="row process_box">
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/low-cost-device-icon.png"
                    alt="low cost device"
                    width="73"
                    height="88"
                  />
                </h4>
                <h3>Minimal Price</h3>
                <p>The product is not required for purchase. Pay as specified in your rental agreement.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/easy-procedure-icon.png"
                    alt="easy procedure"
                    width="73"
                    height="73"
                  />
                </h4>
                <h3>Simple Procedure</h3>
                <p>A quick and simple method for configuring the gadgets</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/no-maintenance-cost.png"
                    alt="no maintenance cost"
                    width="74"
                    height="75"
                  />
                </h4>
                <h3>No Upkeep Expense</h3>
                <p>No high maintenance expenses to pay. Weve got you covered.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-item">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/data-accurate-reports.png"
                    alt="data accurate reports"
                    width="73"
                    height="73"
                  />
                </h4>
                <h3>Precise Reports</h3>
                <p>Using our dashboard, get accurate and dependable reports on air quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prana Air SQUAIR Monitor Section */}
      <section className="squair-monitor-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>Prana Air SQUAIR Monitor</strong>
            </h2>
            <p>
              With Prana Air, you can now rent the ability to know the levels of TVOCs, temperature, Humidity, and
              PM2.5, among other pollution characteristics!
            </p>
            <a className="pocket_buy_btn" href="/air-quality-monitor">
              Know More
            </a>
          </div>

          <div className="text-center">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/09/prana-air-squair-monitor-as-iaq-device.png"
              alt="SQUAIR Monitor"
              className="img-fluid"
            />
          </div>

          <div className="featured_cntr">
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5-parameter.png"
                alt="pm2.5 icon"
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>PM2.5</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/07/co2.png"
                alt="co2 icon"
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>CO2</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/tvoc-parameter-icon.png"
                alt="TVOC icon"
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>TVOC</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/noise-icon.png"
                alt="noise icon"
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>Noise</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/light.png"
                alt="light icon"
                width="58"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>Light</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/temp.png"
                alt="temperature icon"
                width="40"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>Temp.</h4>
              </div>
            </div>
            <div className="feature_box">
              <img
                className="responsive_icon"
                src="https://www.pranaair.com/wp-content/uploads/2022/09/humidity-parameter.png"
                alt="humidity icon"
                width="40"
                height="46"
              />
              <div className="feature_wrap_box">
                <h4>Humidity</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Data Accessibility Section */}
      <section className="data-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/aqi-air-quality-mobile-app.png"
                alt="Mobile App"
                className="img-fluid mobile_app"
              />
            </div>
            <div className="col-md-6">
              <div className="introducing_box sub_title_box">
                <h2 className="title_heading" style={{ textAlign: "left" }}>
                  <strong>Remote Data Accessibility Anytime Anywhere</strong>
                </h2>
                <p style={{ textAlign: "left" }}>
                  Remote access and analysis of the data are possible. Just use the AQI mobile app to access the data
                  after connecting the device to WiFi.
                </p>

                <h4 style={{ textAlign: "left" }}>Features of the AQI Mobile App:</h4>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt="okay icon"
                    width="20"
                    height="20"
                  />{" "}
                  Accessible data remotely
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt="okay icon"
                    width="20"
                    height="20"
                  />{" "}
                  Updates to data in real-time
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt="okay icon"
                    width="20"
                    height="20"
                  />{" "}
                  Analytics using historical data
                </p>
                <p style={{ textAlign: "left" }}>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/okay-icon.png"
                    alt="okay icon"
                    width="20"
                    height="20"
                  />{" "}
                  Graphical representations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="rental-process-section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>Rental Process</strong>
          </h2>
          <p style={{ textAlign: "center" }}>
            To obtain our rental service, the process is quite simple and quick. To use the service, simply follow these
            5 steps.
          </p>

          <div className="row payment_process_section">
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/payment-icon.png"
                    alt="payment received icon"
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>Payment Received</strong>
                </h4>
                <p style={{ textAlign: "center" }}>1. An order is placed and payment is received.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/shipment-icon.png"
                    alt="shipment icon"
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>Shipment</strong>
                </h4>
                <p style={{ textAlign: "center" }}>2. The products are shipped &amp; delivered to your doorstep.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/product-setup-icon.png"
                    alt="product setup icon"
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>Product Setup</strong>
                </h4>
                <p style={{ textAlign: "center" }}>3. The device is set up and is ready to use.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/09/support-service-icon.png"
                    alt="support icon"
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>Support</strong>
                </h4>
                <p style={{ textAlign: "center" }}>4. For any technical issues, the support is provided.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="process-step">
                <h4>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2022/08/product-return-icon.png"
                    alt="product return icon"
                    width="67"
                    height="67"
                  />
                </h4>
                <h4 style={{ textAlign: "center" }}>
                  <strong>Return Product</strong>
                </h4>
                <p style={{ textAlign: "center" }}>5. The products have to be returned after the rental period.</p>
              </div>
            </div>
          </div>

          <div className="row process-images">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-1st-payment-received.jpg"
                alt="Process Image 1"
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-2nd-product-delivery.jpg"
                alt="Process Image 2"
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-3rd-product-usage.jpg"
                alt="Process Image 3"
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/09/step-4th-product-return.jpg"
                alt="Process Image 4"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section
        className="terms-section"
        style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2022/08/background-icons.png)" }}
      >
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>Terms & Conditions</strong>
          </h2>
          <p style={{ textAlign: "center" }}>
            These are the terms and conditions that apply to Prana Air rental services.
          </p>

          <div className="terms-list">
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              Ten units or more must be rented for a minimum of twelve months.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              You must pay a rental security amount in advance at the time of ordering.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              Only after the rental time has ended is the security deposit returned.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              You are responsible for covering the cost of any physical damage to the merchandise. The quantity of
              security will be taken into account.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              Prana Air will offer technical support for any issues pertaining to the product and data accessibility for
              the duration of the rental.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              The product, technical help for device setup, and cloud server for data accessibility are all included in
              the rental service.
            </p>
            <p>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/Rectangle-43.png"
                alt=""
                width="14"
                height="15"
              />{" "}
              The WiFi service is not included in the rental package.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-heading">
              <h2>Get in Touch</h2>
              <p>
                Please help us know what requirements you have. Our team will
                contact you very soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm pageName="Rental Monitor Page" />

      {/* FAQ Section */}
      <section className="faq_section faq_ask_section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>
                Frequently Asked <span className="bold_text">Questions</span>
              </strong>
            </h2>
            <p>Have questions about our rental process? We are here to help.</p>
          </div>

          <div className="faq-accordion">
            <details>
              <summary>1. What is the device setup process?</summary>
              <div className="faq-content">
                <p>
                  - Place the device and provide electricity in an indoor location where you wish to keep an eye on the
                  quality of the air. After that, use the AQI mobile app to connect the device to WiFi.
                </p>
              </div>
            </details>

            <details>
              <summary>2. How can I get the devices air quality data?</summary>
              <div className="faq-content">
                <p>
                  - The AQI mobile or smart app TV app and web-dashboard provide remote access to the data for analysis
                  and access.
                </p>
              </div>
            </details>

            <details>
              <summary>3. The Minimum Order Quantity (MOQ) is what?</summary>
              <div className="faq-content">
                <p>- For a 12-month period, you must buy a minimum of 10 units.</p>
              </div>
            </details>

            <details>
              <summary>4. Does the full sum have to be paid up front?</summary>
              <div className="faq-content">
                <p>- Yes, there is a requirement to pay the full cost upfront along with a refundable deposit.</p>
              </div>
            </details>

            <details>
              <summary>5. Is the money used as security refundable?</summary>
              <div className="faq-content">
                <p>
                  - After the rental period ends, the security deposit is returned in full. Should the unit sustain any
                  physical harm, the security value will be reduced accordingly.
                </p>
              </div>
            </details>

            <details>
              <summary>6. What should you do in the event of a technical problem?</summary>
              <div className="faq-content">
                <p>
                  There would be technical support available in the event of any problems. You must first get in touch
                  with the <strong>Prana Air support staff.</strong>
                </p>
              </div>
            </details>

            <details>
              <summary>7. What advantages does this renting service offer me?</summary>
              <div className="faq-content">
                <p>
                  - You can quickly and affordably monitor the quality of the air, analyze, and compare your
                  organizations data, all without having to deal with ownership issues.
                </p>
              </div>
            </details>

            <details>
              <summary>8. For rentals, what should be the minimum duration?</summary>
              <div className="faq-content">
                <p>- The service must be used for a minimum of 24 months.</p>
              </div>
            </details>

            <details>
              <summary>9. What kind of business will be able to implement the renting model?</summary>
              <div className="faq-content">
                <p>
                  - Any kind of organization, including schools, office buildings, industries, power plants, industrial
                  zones, shopping centers, and residential buildings, can adopt the leasing model.
                </p>
              </div>
            </details>

            <details>
              <summary>10. Can residential buildings use it?</summary>
              <div className="faq-content">
                <p>
                  - Indeed, it is possible to utilize it to keep an eye on the indoor air quality of residential
                  structures.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <strong>
                Our <span className="bold_text">Clientele</span>
              </strong>
            </h2>
            <p>We are honored to work with so many well-known companies.</p>
          </div>

          <div className="row client_logo_section">
            <div className="logo-box">
              <ul>
                <li>
                  <img src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png" alt="Client Logo"
                    className="img-fluid" />
                </li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/INTERGLOBE.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/GMDA-1.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/download.png" alt="Client Logo"
                  className="img-fluid" /></li>
                <li><img src="https://www.pranaair.com/wp-content/uploads/2022/08/HAVELLS.png" alt="Client Logo"
                  className="img-fluid" /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

