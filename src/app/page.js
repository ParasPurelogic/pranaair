"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import "./home.css"

export default function PranaAirHomepage() {
  // State for slider
  const [currentSlide, setCurrentSlide] = useState(0)
  // State for product tabs
  const [activeTab, setActiveTab] = useState(0)
  // State for connectivity tabs
  const [activeConnectivityTab, setActiveConnectivityTab] = useState(1)
  // State for blog posts
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Auto-rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Function to activate custom tab
  const activateCustomTab = (index) => {
    setActiveTab(index)
  }

 // Fetch blog posts
 useEffect(() => {
  const fetchBlogPosts = async () => {
    try {
      setLoading(true)
      // Real WordPress API call
      const response = await fetch("https://www.pranaair.com/wp-json/wp/v2/posts?_embed&per_page=2")
      const data = await response.json()

      // Transform WordPress data to match our blog post format
      const formattedPosts = data.map((post) => {
        // Get the featured image URL or use a placeholder
        const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]
        const imageUrl = featuredMedia?.source_url || "/placeholder.svg"

        // Get the first category
        const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog"
        const categorySlug = post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "blog"

        // Format the date
        const date = new Date(post.date)
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

        return {
          id: post.id.toString(),
          title: post.title.rendered,
          slug: post.slug,
          category: category,
          categorySlug: categorySlug,
          imageUrl: imageUrl,
          imageAlt: post.title.rendered,
          date: formattedDate,
        }
      })

      setBlogPosts(formattedPosts)
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      // Set fallback data in case the API fails
      setBlogPosts([
        {
          id: "1",
          title: "Understanding Air Quality in India: Challenges and Solutions",
          slug: "breathing-air-pollution-is-like-smoking",
          category: "Air Quality",
          categorySlug: "air-quality",
          imageUrl:
            "https://www.pranaair.com/wp-content/uploads/2025/04/breathing-air-pollution-is-like-smoking-1306x870.webp",
          imageAlt: "Air Quality in India",
          date: "11/04/2025",
        },
        {
          id: "2",
          title: "The Hidden Dangers of PM2.5: How Small Particles Cause Big Health Problems",
          slug: "prana-air-devices-helped-study",
          category: "Health",
          categorySlug: "health",
          imageUrl:
            "https://www.pranaair.com/wp-content/uploads/2025/04/prana-air-device-helped-study-of-heart-defects-1306x870.webp",
          imageAlt: "PM2.5 Effects on Health",
          date: "09/04/2025",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  fetchBlogPosts()
}, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-wrapper">
            {/* Left Column - Text Content */}
            <div className="hero-text-content">
              <h1>
                Simplify Your <span className="text-highlight">Air Quality Monitoring</span>
              </h1>
              <p>Keep tabs on your indoor and outdoor air quality index using cutting-edge technology devices.</p>
              <Link href="/air-quality-monitor" className="hero-button">
                Explore More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/hero-button-icon.png"
                  alt="Button icon"
                  width={100}
                  height={100}
                  className="hero-button-icon"
                />
              </Link>
            </div>

            {/* Right Column - Image Grid */}
            <div className="hero-image-grid">
              <div className="slider-container">
                <div className={`slider-item ${currentSlide === 0 ? "active" : ""}`}>
                  <div className="all-device">
                    <ul>
                      <li>
                        <Link href="/air-quality-monitor/ambient-air-monitor/prana-sense">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-sensible-plus-monitor.webp"
                            alt="prana air sensible plus indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://play.google.com/store/apps/details?id=com.aqi.data">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/prana-air-Insightful-data.webp"
                            alt="aqi web-dashboard for prana air's air quality monitors"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul className="second-row">
                      <li className="mt">
                        <Link href="/air-quality-monitor/handheld/pocket-monitor/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Pocket-PM2.5-Monitor-WiFi.webp"
                            alt="prana air pocket pm2.5 monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/air-quality-monitor/cair-monitor/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Cair-plus-Indoor-Air-Quality-Monitor.webp"
                            alt="prana air cair+ indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`slider-item ${currentSlide === 1 ? "active" : ""}`}>
                  <div className="all-device">
                    <ul>
                      <li>
                        <Link href="/air-quality-monitor/ambient-air-monitor/prana-sense/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Highly-accurate-prana-senes-monitor.webp"
                            alt="prana air prana sense ambient air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/air-quality-monitor/pocket-co2-monitor/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/Worlds-Smallest-CO2-Monitor.webp"
                            alt="prana air co2 air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul className="second-row">
                      <li className="mt">
                        <Link href="/air-quality-monitor/sensible-air-monitor/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/sensible-monitor.webp"
                            alt="prana air sensible indoor air quality monitor"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.aqi.in/">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/10/aqi-website.webp"
                            alt="aqi dashboard"
                            width={300}
                            height={200}
                            className="device-image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Parameters Section */}
      <section className="explore-functionality-sec">
        <div className="container">
          <div className="parameters-content">
            <div className="function-txt">
              <h2>Stay Ahead: Guard Yourself Against Harmful Pollutants!</h2>
              <p>
                According to the World Health Organization (WHO), air pollution causes around 7 million premature deaths
                each year due to various diseases. Including heart disease, stroke, chronic obstructive pulmonary
                disease, lung cancer, and acute respiratory infections.
              </p>
            </div>
            <div className="parameter-box">
              <div className="firstn">
                <Link href="/what-is-particulate-matter-pm/" className="parameter-btn param-1">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm10.png" alt="pm10 pollutant" width={55} height={55} />
                  PM10
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href="/what-is-nitrogen-dioxide-no2/" className="parameter-btn param-2">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-no2.png" alt="no2 pollutant" width={55} height={55} />
                  NO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href="/what-is-ozone-o3/" className="parameter-btn param-3">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-o3.png" alt="ozone pollutant" width={55} height={55} />
                  O3
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="button icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
              <div className="firstn">
                <Link href="/what-is-carbon-monoxide-co/" className="parameter-btn param-4">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/co-parameter.png"
                    alt="co pollutant"
                    width={55}
                    height={55}
                  />
                  CO
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href="/what-is-particulate-matter-pm/" className="parameter-btn param-5">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-pm2.5.png" alt="pm2.5 pollutant" width={55} height={55} />
                  PM2.5
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>

                <Link href="/what-is-hydrogen-sulfide-h2s/" className="parameter-btn param-6">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-h2s.png"
                    alt="h2s pollutant"
                    width={55}
                    height={55}
                  />
                  H2S
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
              <div className="firstn last-para">
                <Link href="/what-is-sulfur-dioxide-so2/" className="parameter-btn param-7">
                  <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/hm-so2.png" alt="so2 pollutant" width={55} height={55} />
                  SO2
                  <Image
                    className="parameter-arrow"
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                    alt="pollutant icon"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Air Quality Section */}
      <section className="discover-air-quality">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="discover-header">
                <div className="discover-air-quality-heading">
                  <h2>Discover the Ultimate Air Quality Solutions</h2>
                </div>
                <div className="discover-air-quality-para">
                  <p>
                    Prana Air offers a range of advanced air quality monitors, sensors, purifiers designed for every
                    environment, ensuring you can breathe clean air wherever you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="discover-content">
                <div className="tabs-container">
                  <div className="custom-tabs">
                    <div className={`custom-tab ${activeTab === 0 ? "active" : ""}`} onClick={() => activateCustomTab(0)}>
                      <div className="product-catgeory">
                        <h3>
                          Air Quality Monitors <i className="tab-arrow"></i>
                        </h3>
                      </div>
                    </div>
                    <div className={`custom-tab ${activeTab === 1 ? "active" : ""}`} onClick={() => activateCustomTab(1)}>
                      <div className="product-catgeory">
                        <h3>
                          Air Quality Sensors <i className="tab-arrow"></i>
                        </h3>
                      </div>
                    </div>
                    <div className={`custom-tab ${activeTab === 2 ? "active" : ""}`} onClick={() => activateCustomTab(2)}>
                      <div className="product-catgeory">
                        <h3>
                          Air Quality PCBs <i className="tab-arrow"></i>
                        </h3>
                      </div>
                    </div>
                    <div className={`custom-tab ${activeTab === 3 ? "active" : ""}`} onClick={() => activateCustomTab(3)}>
                      <div className="product-catgeory">
                        <h3>
                          Weather Station <i className="tab-arrow"></i>
                        </h3>
                      </div>
                    </div>
                    <div className={`custom-tab ${activeTab === 4 ? "active" : ""}`} onClick={() => activateCustomTab(4)}>
                      <div className="product-catgeory">
                        <h3>
                          Air Purifiers <i className="tab-arrow"></i>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-content-container">
                  {/* Air Quality Monitors Tab Content */}
                  <div className={`custom-content ${activeTab === 0 ? "active" : ""}`}>
                    <div className="aq-monitor-box">
                      <div className="discover-air-quality-page-img">
                        <Link
                          href="/air-quality-monitor/handheld/pocket-monitor/"
                          className="page-link"
                        >
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pocket-pm2.5-monitor-portable-PM2.5-Monitor.jpg"
                            alt="prana air pocket pm2.5 monitor portable"
                            width={400}
                            height={200}
                            className="monitor-image"
                          />
                          <ul>
                            <li>Pocket PM2.5 Monitor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="discover-air-quality-page-img">
                        <Link href="/air-quality-monitor/air-drone/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-Air-Quality-Drone.jpg"
                            alt="prana air air quality drone"
                            width={400}
                            height={200}
                            className="monitor-image"
                          />
                          <ul>
                            <li>Air Quality Drone</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="aq-monitor-last">
                      <div className="discover-air-quality-page-img cair-monitor">
                        <Link href="/air-quality-monitor/cair-monitor/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-indoor-Cair-Monitor.jpg"
                            alt="prana air cair indoor air quality monitor"
                            width={400}
                            height={200}
                            className="monitor-image"
                          />
                          <ul>
                            <li>Cair + Monitor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                        <Link
                          href="/air-quality-monitor/ambient-air-monitor/"
                          className="page-link"
                        >
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Ambient-Lite-monitor.jpg"
                            alt="prana air ambient air quality monitor"
                            width={400}
                            height={200}
                            className="monitor-image"
                          />
                          <ul>
                            <li>Ambient Lite Monitor</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="see-more-box">
                        <Link href="/air-quality-monitor/" className="see-more">
                          Know More
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                            alt="arrow icon"
                            width={15}
                            height={15}
                            className="arrow-icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Air Quality Sensors Tab Content */}
                  <div className={`custom-content ${activeTab === 1 ? "active" : ""}`}>
                    <div className="sensor-row">
                      <ul className="all-sensor">
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/outdoor-pm-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-pm-sensor.jpg"
                                  alt="prana air outdoor pm2.5 sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>PM Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/carbon-dioxide-co2-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-co2-sensor.jpg"
                                  alt="prana air ndir co2 sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image co2-sensor-img"
                                />
                              </div>
                              <ul>
                                <li>CO2 Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/carbon-monoxide-co-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-co-sensor.jpg"
                                  alt="prana air co sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>CO Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/sulfur-dioxide-so2-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-so2-sensor.jpg"
                                  alt="prana air so2 sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>SO2 Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <ul className="all-sensor">
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/ammonia-nh3-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-ammonia-sensor.jpg"
                                  alt="prana air nh3 ammonia sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>NH3 Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/ozone-o3-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-ozone-sensor.jpg"
                                  alt="prana air o3 ozone sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>Ozone Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="discover-air-sensor-page-img">
                            <Link
                              href="/air-quality-sensor/nitrogen-dioxide-no2-sensor/"
                              className="sensor-page-link"
                            >
                              <div className="img-box">
                                <Image
                                  src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-no2-sensor.jpg"
                                  alt="prana air no2 sensor"
                                  width={250}
                                  height={150}
                                  className="sensor-image"
                                />
                              </div>
                              <ul>
                                <li>NO2 Sensor</li>
                                <li>
                                  <Image
                                    src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                    alt="arrow icon"
                                    width={15}
                                    height={15}
                                    className="arrow-icon"
                                  />
                                </li>
                              </ul>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="knwo-more-box">
                            <Link href="/air-quality-sensor/" className="see-more">
                              Know More
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Air Quality PCBs Tab Content */}
                  <div className={`custom-content ${activeTab === 2 ? "active" : ""}`}>
                    <div className="aq-monitor-pcb-box">
                      <div className="discover-air-quality-pcb-page-img">
                        <Link href="/air-quality-pcb-board/" className="pcb-page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/09/pranaair-pcb-board.webp"
                            alt="air quality pcb boards of prana air"
                            width={500}
                            height={300}
                            className="pcb-image"
                          />
                          <ul>
                            <li>Air Quality PCBs</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Weather Station Tab Content */}
                  <div className={`custom-content ${activeTab === 3 ? "active" : ""}`}>
                    <div className="aq-monitor-pcb-box">
                      <div className="discover-air-quality-pcb-page-img weather-st-img">
                        <Link
                          href="/air-quality-monitor/weather-station/"
                          className="pcb-page-link"
                        >
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Weather-station.jpg"
                            alt="Weather station of prana air"
                            width={500}
                            height={300}
                            className="weather-image"
                          />
                          <ul>
                            <li>Weather Station</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Air Purifiers Tab Content */}
                  <div className={`custom-content ${activeTab === 4 ? "active" : ""}`}>
                    <div className="aq-monitor-box">
                      <div className="discover-air-quality-page-img">
                        <Link href="/wearable-air-purifier/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Hanging-Purifier.jpg"
                            alt="prana air wearable personal air purifier"
                            width={400}
                            height={200}
                            className="purifier-image"
                          />
                          <ul>
                            <li>Wearable Air Purifier</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="discover-air-quality-page-img">
                        <Link href="/fresh-air-machine/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Fresh-air-Machine.jpg"
                            alt="prana air fresh air machine as air quality solution"
                            width={400}
                            height={200}
                            className="purifier-image"
                          />
                          <ul>
                            <li>Fresh air machine</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="aq-monitor-last">
                      <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                        <Link href="/outdoor-air-purifier/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-outdoor-air-Purifier.jpg"
                            alt="prana air outdoor air purifier"
                            width={400}
                            height={200}
                            className="purifier-image"
                          />
                          <ul>
                            <li>Outdoor air Purifier</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="discover-air-quality-page-img cair-monitor ambient-lite">
                        <Link href="/car-air-filter/" className="page-link">
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-Car-cabin-filters.jpg"
                            alt="prana air anti pollution car air filter"
                            width={400}
                            height={200}
                            className="purifier-image"
                          />
                          <ul>
                            <li>Car Cabin Filter</li>
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png"
                                alt="arrow icon"
                                width={15}
                                height={15}
                                className="arrow-icon"
                              />
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Experience Shopping Section */}
        <div className="shopping-section">
          <div className="container">
            <div className="shopping-content">
              <div className="experince-heading">
                <h3>Experience the convenience of shopping</h3>
              </div>
              <div className="experience-function">
                <ul className="experince-shoping">
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2025/01/shipping-truck.png"
                      alt="Free Shipping icon"
                      width={45}
                      height={45}
                    />
                    Global Shipping
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Quick-Delivery.png"
                      alt="quick delivery icon"
                      width={45}
                      height={45}
                    />
                    Quick Delivery
                  </li>
                </ul>
                <ul className="experince-shoping">
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Warranty-Products.png"
                      alt="warranty products icon"
                      width={45}
                      height={45}
                    />
                    Warranty Products
                  </li>
                  <li>
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Return-Policy.png"
                      alt="return policy icon"
                      width={45}
                      height={45}
                    />
                    Return Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Connectivity Section */}
      <section className="seamless-connective">
        <div className="container">
          <div className="connectivity-header">
            <div className="seamless-connect-heading">
              <h2>Seamless Connectivity for Air Quality Monitoring</h2>
            </div>
            <div className="seamless-txt">
              <p>
                Connect Prana Airs air quality monitoring devices effortlessly, designed for seamless integration with
                AQI platforms.
              </p>
            </div>
          </div>

          <div className="seamless-tab">
            <div className="tabs-header">
              <button
                className={`tab-button ${activeConnectivityTab === 1 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(1)}
              >
                AQI Mobile App <i className="tab-arrow"></i>
              </button>
              <button
                className={`tab-button ${activeConnectivityTab === 2 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(2)}
              >
                Web-Dashboard <i className="tab-arrow"></i>
              </button>
              <button
                className={`tab-button ${activeConnectivityTab === 3 ? "active" : ""}`}
                onClick={() => setActiveConnectivityTab(3)}
              >
                AQI TV App <i className="tab-arrow"></i>
              </button>
            </div>

            <div className="tab-bg">
              {/* AQI Mobile App Tab Content */}
              {activeConnectivityTab === 1 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <ul className="mob-heading">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                            alt="aqi mobile app logo"
                            width={100}
                            height={100}
                          />
                        </li>
                        <li>
                          <h3>Mobile App</h3>
                          <h4>Seamless Connectivity</h4>
                        </li>
                      </ul>
                      <p>
                        Stay informed with real-time updates and personalized alerts on your mobile app, ensuring you
                        always know the air quality around you, wherever you are.
                      </p>
                      <div className="connect-btn-box">
                        <Link href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                          <ul className="seamless-connect-btn">
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                                alt="ios app logo"
                                width={35}
                                height={35}
                              />
                            </li>
                            <li>
                              <span className="btn-txt-small">Download on the</span>
                              <br />
                              <span className="btan-txt">App Store</span>
                            </li>
                          </ul>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.aqi.data" className="play-store-btn">
                          <ul className="seamless-connect-btn">
                            <li>
                              <Image
                                src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                                alt="android app"
                                width={35}
                                height={35}
                              />
                            </li>
                            <li>
                              <span className="btn-txt-small">Get it on</span>
                              <br />
                              <span className="btan-txt">Google Play</span>
                            </li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-mobile-air-quality-app.png"
                        alt="AQI mobile app for air quality monitoring data"
                        width={300}
                        height={500}
                        className="app-image"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Web-Dashboard Tab Content */}
              {activeConnectivityTab === 2 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <h3>Web dashboard connectivity</h3>
                      <h4>Real-Time Insights</h4>
                      <p>
                        Discover real-time insights into the air quality with our intuitive web dashboard connectivity.
                        Enjoy seamless integration across multiple devices for a complete picture of your air
                        environment.
                      </p>
                      <Link href="https://www.aqi.in/userlogin" className="dashboard-button">
                        <ul className="seamless-connect-btn dash-btn">
                          <li>
                            <Image
                              src="https://www.pranaair.com/wp-content/uploads/2024/07/AQI-api-logo.png"
                              alt="aqi logo"
                              width={40}
                              height={40}
                            />
                          </li>
                          <li>
                            <span className="btn-txt-small">View</span>
                            <br />
                            <span className="btan-txt">Dashboard</span>
                          </li>
                        </ul>
                      </Link>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                        alt="aqi web-dashboard for more insightful data of air quality monitors"
                        width={500}
                        height={300}
                        className="web-dash"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* AQI TV App Tab Content */}
              {activeConnectivityTab === 3 && (
                <div className="tab-panel active">
                  <div className="panel-content">
                    <div className="connectivety-tab-text">
                      <ul className="mob-heading">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                            alt="AQI TV app logo"
                            width={100}
                            height={100}
                          />
                        </li>
                        <li>
                          <h3>TV connectivity</h3>
                          <h4>View Air quality data</h4>
                        </li>
                      </ul>
                      <p>
                        Easily view your air quality data on your TV screen with our seamless connectivity feature. Stay
                        informed about your environment with clear, easy-to-read visuals directly on your TV.
                      </p>
                    </div>
                    <div className="connectivety-tab-bg">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                        alt="AQI TV app for displaying air quality data remotely"
                        width={500}
                        height={300}
                        className="tv-screen"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Drone Section */}
      <section className="air-quality-drone-secv">
        <div className="container">
          <div className="drone-content">
            <div className="air-quality-drone-txt">
              <h2>See the Air You Breathe</h2>
              <p>
                Get real-time insights into air quality with Prana Airs Air Quality Drone, equipped with cutting-edge
                sensor technology.
              </p>
              <Link href="/air-quality-monitor/air-drone" className="drone-button">
                Know More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/parameters-icon.webp"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
            <div className="drone-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/air-quality-drone-of-prana-air.webp"
                alt="air quality drone of prana air"
                width={500}
                height={400}
                className="drone-image"
              />
            </div>
          </div>
        </div>
        <div className="controller">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-quality-drone-cntroller.png"
            alt="prana air quality drone remote controller"
            width={1200}
            height={300}
            className="controller-image"
          />
        </div>
      </section>

      {/* Our Clientele Section */}
      <section className="our-clientele-sec">
        <div className="container">
          <div className="clint-br">
            <div className="clientele-header">
              <div className="our-client-heading">
                <h2>Our Clientele</h2>
              </div>
              <div className="our-client-para">
                <p>Join industry leaders who rely on our advanced solutions to ensure cleaner, safer environments.</p>
              </div>
            </div>
          </div>

          <div className="all-cliente-logo">
            <ul>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/tata.jpg" alt="tata logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/taj.jpg" alt="taj logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/renault-nissan.jpg"
                  alt="renault nissan logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/ola.jpg" alt="ola logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/microsoft.jpg" alt="microsolft logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/08/L-T-logo.jpg" alt="L&T logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/marriott.jpg" alt="marriott logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/mahindra.jpg" alt="mahindra logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-rorkee.jpg" alt="iit rorkee logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/leighton.jpg"
                  alt="leighton logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-hyderabad.jpg"
                  alt="iit hyderabad logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-danbad.jpg" alt="iit danbad logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/iit-bombay.jpg" alt="iit bombay logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-Banaras.jpg"
                  alt="iit banaras logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/havells.jpg" alt="havells logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Google-Bangalore-.jpg"
                  alt="google bangalore logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/gmda.jpg" alt="gmda logo" width={150} height={80} />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/dae.jpg" alt="dae logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/Neeri.jpg"
                  alt="csir logo"
                  width={150}
                  height={80}
                />
              </li>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/bhu-varanasi.jpg" alt="bhu logo" width={150} height={80} />
              </li>
              <li>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/BCG-Boston-Consulting-Group.jpg"
                  alt="bcg boston consulting group logo"
                  width={150}
                  height={80}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="trusted-clients-sec">
        <div className="container">
          <div className="trusted-clients-content">
            <div className="trusted-clients-text">
              <div className="counter-txt">
                <div className="stats-number">4000</div>
                <div className="counter_suffix">+</div>
              </div>

              <div className="truted-client-heading">
                <h3>Air Quality Monitors Installed</h3>
              </div>

              <div className="monitor-insalled-txt">
                <h3>
                  <span className="text-highlight">Across Top Sectors:</span> Construction, Hospitality, Education,
                  Tech, Research Study, and many more
                </h3>
                <p>
                  Installed in numerous strategic sites, ensuring comprehensive coverage and accurate data collection.
                </p>
              </div>
            </div>
            <div className="trusted-clients-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Airs-Monitors-Installed-Sites.gif"
                alt="Prana Air clients all over India"
                width={600}
                height={400}
                className="clients-map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-sec">
        <div className="container">
          <div className="case-studies-heading">
            <h2>Some of Our Case Studies</h2>
          </div>
        </div>
        <div className="case-studies-slider">
          <div className="case-studies-slider-container">
            <div className="case-study-item">
              <Link href="https://www.pranaair.com/blog/mahindra-lifespaces-air-quality-due-to-construction-and-demolition-activities/" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-Mahindra-Lifespaces.jpg"
                  alt="case study of How Prana Air helped Mahindra Lifespaces"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air helped Mahindra Lifespaces</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="https://www.pranaair.com/blog/case-study-air-quality-monitoring-solution-for-interglobe/" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Aided-in-Air-Quality-Monitoring-Solutions-for-INTERGLOBE-1.jpg"
                  alt="case study of Aided in Air Quality Monitoring Solutions for INTERGLOBE"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>Aided in Air Quality Monitoring Solutions for INTERGLOBE</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="https://www.pranaair.com/blog/case-study-air-pollution-due-to-stubble-burning/" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-helped-CII-to-monitor-air-pollution.jpg"
                  alt="case study of How Prana Air helped CII to monitor air pollution"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air helped CII to monitor air pollution</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="https://www.pranaair.com/blog/prana-air-monitors-street-level-pollution/" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/How-Prana-Air-aided-Ola-and-Microsoft.jpg"
                  alt="case study of How Prana Air aided Ola and Microsoft"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>How Prana Air aided Ola and Microsoft</h3>
              </Link>
            </div>
            <div className="case-study-item">
              <Link href="https://www.pranaair.com/blog/case-study-prana-air-aids-tata-steel-in-hyperlocal-air-quality-monitoring/" className="case-study-link">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Prana-Air-aids-TATA-Steel.jpg"
                  alt="case study of Prana Air aids TATA Steel"
                  width={300}
                  height={200}
                  className="case-study-image"
                />
                <h3>Prana Air aids TATA Steel</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breathing Fresh Air Section */}
      <section className="breathing-fresh-air">
        <div className="container">
          <div className="breathing-fresh-air-content">
            <div className="breathing-fresh-air-txt">
              <h2>Breathing Fresh Air Is Not An Option, It Is Our Right</h2>
              <Link href="/fresh-air-machine/" className="fresh-air-button">
                Know More
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png"
                  alt="link icon"
                  width={15}
                  height={15}
                  className="button-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Most Accurate Section */}
      <div className="most-accurate-row container">
        <div className="container">
          <div className="most-accurate-content">
            <div className="most-accurate-text">
              <h3>Most Accurate & Low-Cost</h3>
              <h4>
                Prana Air Monitors, Reliable
                <br />
                Alternative To Costly Devices
              </h4>
            </div>
            <div className="accurate-btn">
              <Link href="https://www.pranaair.com/air-quality-data-accuracy/" className="accuracy-button">
                Check Accuracy
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/green-arrow.png" alt="link icon" width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <section className="air-quality-solution-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-page-tab">
                <div className="solution-text">
                  <h3>
                    Air Quality <span className="text-highlight">Solutions</span>
                  </h3>
                  <Link href="/solutions-by-application" className="solutions-button">
                    Explore More
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                      alt="link button icon"
                      width={15}
                      height={15}
                      className="button-icon"
                    />
                  </Link>
                </div>
                <div className="solution-pages-link smart-city">
                  <Link href="/solutions-by-application/smart-city/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/08/Smart-City-Projects.jpg"
                      alt="prana air - air quality solutions for smart city project"
                      width={500}
                      height={300}
                      className="solution-image"
                    />
                    <h4>
                      Smart City
                      <br />
                      Projects
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/institutes/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Institutes-Schools.jpg"
                      alt="prana air - air quality solutions for schools and insitutes"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Institutes/
                      <br />
                      Schools
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/constructions/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/air-quality-solutions-for-contruction-sites.jpg"
                      alt="prana air - air quality solutions for construction sites"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Construction
                      <br />
                      Sites
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link iconn"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/hotel-businesses/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hotel-Businesses.jpg"
                      alt="prana air - air quality solutions for hotel businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hotel
                      <br />
                      Businesses
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/airports/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Airports.jpg"
                      alt="prana air - air quality solutions for airport"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Airports
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="all-solu-tab">
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/hospital/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Hospital-Healthcare.jpg"
                      alt="prana air - air quality solutions for hospital and healthcare industries"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Hospital/
                      <br />
                      Healthcare
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
                <div className="solution-tab-links">
                  <Link href="/solutions-by-application/real-estate/">
                    <Image
                      src="https://www.pranaair.com/wp-content/uploads/2024/07/Real-Estates.jpg"
                      alt="prana air - air quality solutions for real estates businesses"
                      width={250}
                      height={150}
                      className="solution-image"
                    />
                    <h4>
                      Real
                      <br />
                      Estates
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                        alt="link icon"
                        width={15}
                        height={15}
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-sec">
        <div className="container">
          <div className="blog-content">
            <div className="articles-list">
              {loading ? (
                <div className="loading">Loading blog posts...</div>
              ) : (
                blogPosts.map((post) => (
                  <div key={post.id} className="project-odd">
                    <div className="post-thumbnail-wrap">
                      <Link href={`https://www.pranaair.com/blog/${post.slug}/`}>
                        <Image
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={post.imageAlt}
                          width={500}
                          height={300}
                          className="blog-image"
                        />
                      </Link>
                    </div>
                    <div className="post-entry-content">
                      <div className="entry-meta">
                        <Link
                          href={`https://www.pranaair.com/blog/category/${post.categorySlug}/`}
                          className="category-link"
                        >
                          {post.category}
                        </Link>
                        <span className="post-date">{post.date}</span>
                      </div>
                      <h3 className="entry-title">
                        <Link href={`https://www.pranaair.com/blog/${post.slug}/`}>{post.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="blog-title">
              <h2>
                Air Quality <span className="text-highlight">Blogs</span>
              </h2>
              <Link href="https://www.pranaair.com/blog/" className="blogs-button">
                See More Blogs
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
                  alt="arrow icon"
                  width={10}
                  height={10}
                  className="button-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Discover Section */}
      <section className="discover-sec">
        <div className="container">
          <div className="discover-title">
            <ul>
              <li>
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/discover-icon.png" alt="leaf icon" width={80} height={80} />
              </li>
              <li>
                <h2>
                  Discover why people love <span className="text-highlight">Prana Air</span>
                </h2>
              </li>
            </ul>
          </div>

          <div className="discover-row">
            <div className="testimonials-container">
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/IIT-ISM-Dhanbad-Indi.png"
                  alt="IIT ISM Dhanbad India logo"
                  width={60}
                  height={60}
                />
                <h3>Dr. Siddhartha Agarwal</h3>
                <h4>Assistant Professor, IIT (ISM) Dhanbad, India.</h4>
                <p>
                  Prana Air outdoor air quality monitors have been a valuable tool in our environmental project. The
                  devices provide reliable data that has helped us to track air quality trends over time. The
                  organization is sincere and dedicated towards its customers. Their customer service is also excellent.
                  I would recommend them to everyone who is working in the field of Environment or Air quality.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/J.M.-Envirolab-Pvt-Ltd.png"
                  alt="J.M Envirolab Pvt Ltd logo"
                  width={60}
                  height={60}
                />
                <h3>Dr. Surender Yadav</h3>
                <h4>General Manager, J.M. Envirolab Pvt. Ltd.</h4>
                <p>
                  We have procured multiple Prana Air Air quality monitors for our work. The monitors have been
                  valuable tool in our field of work. The devices provide accurate and reliable data that has helped us
                  immensely in our application. The devices are capable of performing in harsh situations as well. Their
                  customer service is also very responsive in case of any rare occurrence of malfunction.
                </p>
              </div>
              <div className="clinet-txt">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/07/Unity-Groups.png"
                  alt="unity groups logo"
                  width={60}
                  height={60}
                />
                <h3>Anil Sobti</h3>
                <h4>General Manager-commercial, Unity Group</h4>
                <p>
                  We have been using the Prana Air Air Quality monitors, installed by Purelogic Labs India Pvt. Ltd.
                  at our different construction sites and have found their product accurate and reliable. The devices
                  installed have helped us to comply with the air quality standards and ensure the safety of our
                  workers. The after-sales service is very prompt and excellent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="award-sec">
        <div className="container">
          <div className="awards-content">
            <div className="award-box">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-wearable-award-by-IHW-Council.png"
                  alt="Prana Air's Best Wearable Brand Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">Best Wearable Brand Award </span>
                  Winner in 2019 by IHW council
                </h2>
                <p>
                  Prana Air is proud to receive the Wearable Brand Award at the 4th Edition Good Air Summit and Awards.
                  This recognition highlights our commitment to innovative solutions for clean air.
                </p>
              </div>
            </div>
            <div className="award-box mg-tops">
              <div className="award-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/best-monitoring-device-award-by-IHW-Council.png"
                  alt="Prana Air's Best Monitoring Devices Brand-Award in 2019 by IHW Council"
                  width={400}
                  height={300}
                />
              </div>
              <div className="award-txt">
                <h2>
                  <span className="text-highlight">Best Monitoring Devices Brand Award </span>
                  in 2019 by IHW Council
                </h2>
                <p>
                  We are pleased to announce that we received the prestigious Monitoring Devices Brand Award at the
                  highly regarded 4th Edition Good Air Summit and Awards. Our regular development of new ideas to aid in
                  reducing air pollution demonstrates our commitment to bettering air quality everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Section */}
      <section className="query-sec">
        <div className="container">
          <div className="query-content">
            <div className="query-heading">
              <h2>
                <span className="text-highlight">Have a Query?</span>
                <br />
                Get in touch with us
              </h2>
            </div>
            <div className="lets-talk-link">
              <Link href="https://www.pranaair.com/contact/">
                Let Talk
                <Image src="https://www.pranaair.com/wp-content/uploads/2024/07/link-arrow.png" alt="link icon" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

