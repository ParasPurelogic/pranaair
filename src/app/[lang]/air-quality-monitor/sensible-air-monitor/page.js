"use client";

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ContactForm from "@/Components/Contacform/ContactForm";

export default function SensibleAirMonitor() {
  // Responsive settings for carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      {/* Home Banner Section */}
      <div className="home-banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-banner-image">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/02/slider-1.png" alt="Sensible Air Monitor" className="img-fluid" />
              </div>
              <div className="banner-pm-icons">
                <ul>
                  <li><img className="b1" src="https://www.pranaair.com/wp-content/uploads/2021/02/b1.png" alt="" /></li>
                  <li><img className="b2" src="https://www.pranaair.com/wp-content/uploads/2021/02/b2.png" alt="" /></li>
                  <li><img className="b3" src="https://www.pranaair.com/wp-content/uploads/2021/02/b5.png" alt="" /></li>
                  <li><img className="b4" src="https://www.pranaair.com/wp-content/uploads/2021/02/b4.png" alt="" /></li>
                  <li><img className="b5" src="https://www.pranaair.com/wp-content/uploads/2021/02/b3.png" alt="" /></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-banner">
                <h1>Sensible Air Monitor</h1>
                <p>keep a track of indoor air quality along-with ambient indoor & outdoor PM level.</p>
                <form class="cart" action="https://www.pranaair.com/product/sensible-air-monitor/" enctype="multipart/form-data"
                  method="post"><button class="single_add_to_cart_button button alt banner-btn" name="add-to-cart" type="submit"
                    value="12151">Buy Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="padd-80 featured-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">Sensible Air Quality Monitor<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <p className="text-center">Know the real-time air quality (AQI) along with different air quality parameters.</p>
            </div>
          </div>
          <div className="row featured-info-sec">
            <div className="col-md-4">
              <div className="featured-info">
                <p>Real-Time & Historic Air Quality <br />Hourly, Weekly & Monthly</p>
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/real-time-and-historic-data.jpg" alt="real-time aqi icon" />
              </div>

              <div className="featured-info">
                <p>Easily Portable<br /> air quality device</p>
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/portable-monitor.jpg" alt="sensible air monitor portable icon" />
              </div>

              <div className="featured-info">
                <p>Detect Gase Air Pollutants <br />CO, CO2, O3, HCHO, TVOCs</p>
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/detects-toxic-gases.jpg" alt="toxic gases icon" />
              </div>
            </div>
            <div className="col-md-4 featured-center-sec">
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-air-monitor-for-indoor.png" alt="Featured Banner" className="img-fluid featured-banner" />
              <p className="text-center"><a className="bg-btn bg-green" href="#request_a_quote">Request a Quote</a></p>
            </div>
            <div className="col-md-4">
              <div className="featured-info featured-right-sec">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/micro-sd-card.jpg" alt="sd card ddata card icon" />
                <p>Micro SD Card Data Storage<br />Access data anytime</p>
              </div>

              <div className="featured-info featured-right-sec">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/led-display.jpg" alt="led display icon" />
                <p>Health Tips For Air Pollution <br /> To Get Precautions</p>
              </div>

              <div className="featured-info featured-right-sec">
                <img src="https://www.pranaair.com/wp-content/uploads/2022/07/type-c-cable.jpg" alt="sensible usb charging icon" />
                <p>Type-C USB Power Source<br /> No Inbuilt Battery </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Does It Do Section */}
      <div className="padd-80 does-sec wow fadeInUp" style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2021/03/what-do.png)" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">What does it do?<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <p className="text-center">Our air quality sensor measures the concentration of PM in real time, along with complex parameters that contribute to indoor and outdoor air pollution. Our monitoring device is ideal for residential, commercial and commercial purposes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="technology-sec technology-bg-sec wow fadeInUp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://www.pranaair.com/wp-content/uploads/2022/07/technology-sensors-used-in-sensible-air-monitor.jpg" alt="Technology" className="img-fluid" />
            </div>
            <div className="col-md-6 technology-right-sec">
              <h2 className="cus-heading">What technology is used?<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <p>In order to provide innovative and productive quality products, our team of experts has been constantly working on how to reduce pollution using various pollution detection methods.</p>
              <p>Our main focus revolves around developing sensors that provide accurate, real-time pollution data. As we continue to explore our horizons in researching and developing new ways to benefit our customers needs, we are currently using technologies that include electrochemical, catalytic, optical (including NDIR and PID/metal oxide semiconductors) and spectroscopy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indoor Air Pollution Sensors Section */}
      <div className="padd-80 advanced-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">Indoor Air Pollution Sensors<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <p className="text-center">Our Sensible Portable Air Quality Monitor comes with highly accurate sensors and provides accurate real-time AQI reading within seconds to understand indoor air quality (IAQ).</p>
              <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-air-pollution-monitor.png" alt="Indoor Air Pollution Sensors" className="img-fluid" />
            </div>
          </div>
          <div className="row advanced-indoor-body">
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/particulate-matters-icon.png" alt="particulate matters icon" />
                <h5>Particulate Matters</h5>
                <p style={{ textAlign: "center" }}>0-8.9 ug/m3 is considered low as per 24-hour PM2.5,where as, 0-16.4 ug/m3 is considered standard as per 24-hour PM10 …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/carbon-monoxide-parameter-icon.png" alt="carbon monoxide icon" />
                <h5>Carbon Monoxide</h5>
                <p style={{ textAlign: "center" }}>It is a colorless, odorless, and tasteless flammable gas that is slightly less dense than air. Standard CO level&nbsp; to 70 ppm …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/carbon-dioxide-parameter-icon.png" alt="carbon dioxide icon" />
                <h5>Carbon Dioxide</h5>
                <p style={{ textAlign: "center" }}>At room temperature, carbon dioxide is a colorless, odorless, faintly acidic-tasting, non-flammable gas.&nbsp;In an occupied space …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/FormalDehyde-icon.png" alt="FormalDehyde icon" />
                <h5>FormalDehyde</h5>
                <p style={{ textAlign: "center" }}>Known as formaldehyde, it is a poisonous, colorless, highly water-soluble gas with a pungent smell. 0.1 mg/m3&nbsp;(30-minute average concentration) …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/voc-icon.png" alt="voc gas icon" />
                <h5>VOC</h5>
                <p style={{ textAlign: "center" }}>Organic chemicals that have a high vapor pressure at an ordinary room temperature is called Total Volatile Organic Compounds …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/ozone-icon.png" alt="ozone gas icon" />
                <h5>Ozone</h5>
                <p style={{ textAlign: "center" }}>It is a gas made of three oxygen atom and is a pale blue with a strong smell. Exposure limit for ozone is 0.1 ppm (0.2 mg/m3) …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/temperature-parameter-icon.png" alt="temperature icon" />
                <h5>Temparature</h5>
                <p style={{ textAlign: "center" }}>Owing to variations in humidity, standard temperature in summer is 23 to 25.5°C and in winters is 20 to 23.5 °C and in winters is …</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="advanced-indoor-detail">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/03/humidity-parameter-icon.png" alt="humidity icon" />
                <h5>Humidity</h5>
                <p style={{ textAlign: "center" }}>It has been proven that higher humidity level can result in better air quality. indoor humidity level must range between 40-60% …</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="padd-80 gallery-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="cus-heading text-center"><span style={{ fontSize: "28pt" }}><strong>How Accurate is Sensible Monitor</strong></span><span style={{ fontSize: "28pt" }}><strong>?</strong></span><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h5>
              <p className="text-center">Comparison of our Sensible Monitor with other high-cost pollution monitors in real-time.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                showDots={true}
                className="gallery-carousel"
              >
                <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-data-accuracy.png" alt="Gallery 1" className="img-fluid" /></div>
                <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-sensible-monitor-data-comparision.png" alt="Gallery 2" className="img-fluid" /></div>
                <div><img src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-sensible-monitor-accuracy-check.png" alt="Gallery 3" className="img-fluid" /></div>
                <div><img src="https://www.pranaair.com/wp-content/uploads/2021/03/dusttrak-and-prana-air-sensible-comparision.png" alt="Gallery 4" className="img-fluid" /></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="tutorial-video-sec padd-80 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cus-heading text-center">Comparison<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
              <p className="sub-heading text-center">Prana Air Sensible Air Monitor measures real-time indoor air pollution level that helps you understand the quality of the air you breathe.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/2EIYZoY9MPw"
                  title="Comparison Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Applications Section */}
      <div className="padd-80 solution-application-sec wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center"><span style={{ fontSize: "18pt" }}>Scan this QR Code to</span></h3>
              <img className="img-fluid mx-auto d-block" src="https://www.pranaair.com/wp-content/uploads/2022/04/prana-air-sensible-air-monitor-brochure-qr-code.png" alt="prana air sensible air quality monitor brochure qr code" width="200" height="200" />
              <h3 className="text-center"><span style={{ fontSize: "14pt" }}>Download Brochure</span></h3>
            </div>
            <div className="col-md-6">
              <h3 className="text-center"><span style={{ fontSize: "18pt" }}>Scan this QR Code to</span></h3>
              <img className="img-fluid mx-auto d-block" src="https://www.pranaair.com/wp-content/uploads/2022/07/prana-air-sensible-air-quality-monitor.png" alt="prana air sensible air quality monitor manual qr code" width="200" height="200" />
              <h3 className="text-center"><span style={{ fontSize: "14pt" }}>Download Manual</span></h3>
            </div>
          </div>
          <div className="row solution-main-top-headd">
            <div className="col-12">
              <h2 className="cus-heading text-center">Solution Applications<img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" /></h2>
            </div>
          </div>
          <div className="row desktop-sec">
            <div className="col-md-6 application-left-sec">
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications1">Office</h2>
                  <p className="text-right">Use the air quality monitor to know the indoor pollution level in the office and keep your employees safe from breathing polluted air particles.</p>
                </div>
                <div className="col-md-4">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-office.jpeg" alt="Office" className="img-fluid" />
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications2">Hotel</h2>
                  <p className="text-right">Many visitors come every day to stay a night at the hotel. It is important to make sure that the premise is a very clean environment and make comfort for the visitors.</p>
                </div>
                <div className="col-md-4">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-hospital.jpeg" alt="Hotel" className="img-fluid" />
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-8">
                  <h2 className="applications applications3">School</h2>
                  <p className="text-right applicationstext applicationstext3">Students are the future pillars of a nation. It is the duty of the authority to keep them safe and breathe clean air. The air quality monitor can help to understand the air quality level in school.</p>
                </div>
                <div className="col-md-4">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/School.jpg" alt="School" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4 hospital-img">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/use-of-sensible-monitor-in-hospital.jpeg" alt="Hospital" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications4 text-left">Hospital</h2>
                  <p className="text-left">This is one of the most important places where the authorities need to take care very seriously. Through a good air quality monitor, it will be easily understood air pollution levels.</p>
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/Factory.jpg" alt="Factory" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications5">Factory</h2>
                  <p className="text-left">Safety is the main priority in factories where the workers use very harmful machines and tools. There is a very high chance of high pollution level. With a pollution device, it is very easy to understand the level of air quality at the factory.</p>
                </div>
              </div>
              <div className="row solution-top solution-vertical-center">
                <div className="col-md-4">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/02/CollegeUniversity.jpg" alt="College & University" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h2 className="applications applications6">College & University</h2>
                  <p className="text-left">Educational institutes are the places where professors impart knowledge in many fields. Air pollution is also a field of study the professors teach to the students.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-slider">
            <div className="col-12">
              <Carousel
                responsive={{
                  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 }
                }}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                showDots={true}
                className="solution-carousel"
              >
                <div>
                  <h2 className="applications text-center">Office</h2>
                  <img src="/wp-content/uploads/2021/02/18758.jpg" alt="Office" className="img-fluid mx-auto d-block" />
                  <p className="text-center">Use the air quality monitor to know the indoor pollution level in the office and keep your employees safe from breathing polluted air particles.</p>
                </div>
                <div>
                  <h2 className="applications text-center">Hotel</h2>
                  <img src="/wp-content/uploads/2021/02/16277.jpg" alt="Hotel" className="img-fluid mx-auto d-block" />
                  <p className="text-center">Many visitors come every day to stay a night at the hotel. It is important to make sure that the premise is a very clean environment and make comfort for the visitors.</p>
                </div>
                <div>
                  <h2 className="applications text-center">School</h2>
                  <img src="/wp-content/uploads/2021/02/16279.jpg" alt="School" className="img-fluid mx-auto d-block" />
                  <p className="text-center">Students are the future pillars of a nation. It is the duty of the authority to keep them safe and breathe clean air. The air quality monitor can help to understand the air quality level in school.</p>
                </div>
                <div>
                  <h2 className="applications text-center">Hospital</h2>
                  <img src="/wp-content/uploads/2021/02/18759.jpg" alt="Hospital" className="img-fluid mx-auto d-block" />
                  <p className="text-center">This is one of the most important places where the authorities need to take care very seriously. Through a good air quality monitor, it will be easily understood air pollution levels.</p>
                </div>
                <div>
                  <h2 className="applications text-center">Factory</h2>
                  <img src="/wp-content/uploads/2021/02/16278.jpg" alt="Factory" className="img-fluid mx-auto d-block" />
                  <p className="text-center">Safety is the main priority in factories where the workers use very harmful machines and tools. There is a very high chance of high pollution level. With a pollution device, it is very easy to understand the level of air quality at the factory.</p>
                </div>
                <div>
                  <h2 className="applications text-center">College & University</h2>
                  <img src="/wp-content/uploads/2021/02/16280.jpg" alt="College & University" className="img-fluid mx-auto d-block" />
                  <p className="text-center">Educational institutes are the places where professors impart knowledge in many fields. Air pollution is also a field of study the professors teach to the students.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Portable Section */}
      <div className="portable-sec" id="portable-sec-top" style={{ backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2021/03/quality-moniter.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 hideatmobile">
              <h2>Smallest, Affordable & Portable Air Quality Monitor</h2>
              <a className="bg-btn bg-green" href="#">Buy Now</a>
              <a className="bg-btn bg-orange" href="https://www.amazon.in/Prana-Air-Sensible-Quality-Measuring/dp/B07Z5TSN2R/">
                <img src="https://www.pranaair.com/wp-content/uploads/2021/02/quality-amazon.png" alt="amazon" />amazon
              </a>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>

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
      <ContactForm pageName="Sensible Air Monitor Page" />

      {/* Related Products Section */}
      <div className="product_compare_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center"><span className="nova-light" style={{ fontSize: "20pt" }}><strong className="nova-bold">You May Also Like Other</strong></span></h3>
              <p className="text-center"><span style={{ fontSize: "18pt" }}>Air Quality Monitors</span><sup><img src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" alt="logo" width="32" height="24" /></sup></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product_compare_box">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/pocket-monitor-in-outdoor.jpeg" alt="prana air pocket air quality monitor" />
                </a>
                <h3>Pocket+</h3>
              </div>
              <div className="product_compare_box">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-cair-monitor-indoor.jpeg" alt="prana air cair air quality monitor" />
                </a>
                <h3>CAIR+</h3>
              </div>
              <div className="product_compare_box">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/03/Sensible-air-monitor-on-table.jpg" alt="prana air sensible plus air quality monitor" />
                </a>
                <h3>Sensible+</h3>
              </div>
              <div className="product_compare_box">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2021/05/prana-air-squair-air-quality-monitor.jpg" alt="prana air squair air quality monitor" />
                </a>
                <h3>SQUAIR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
