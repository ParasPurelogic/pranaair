"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

export default function ParticularMatterPage() {
  const [activeTab, setActiveTab] = useState("AQI");

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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="banner-content">
                <img 
                  className="wp-image-60375 aligncenter" 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/what-is-particulate-matter-pm.png" 
                  alt="what is particulate matter pm" 
                  width="224" 
                  height="194" 
                />
                <h1 className="whitetext text-center">
                  <span className="heading_top_white">What is Particulate Matter (PM)?</span>
                </h1>
                <p className="whitetext text-center">
                  <span>PM, Particulate matter, or Particulate is a mixture of liquid and solid particles that are suspended in the air. So, they can range from microscopic particles to particles like smoke, soot, liquid particles, and dust. And it can be seen by the naked eye. Hence, these categorized into 3 categories, based on their size. Thus, these are PM10 (coarse, visible to the naked eye), PM2.5 (fine particles), and PM1 (ultra-fine particles).</span>
                </p>
                <p className="whitetext text-center">
                  <span>According to the AQLI (Air Quality Life Index), Particulate air pollution reduces the average persons life by 2.2 years, which is more than deadly infectious illnesses like HIV/AIDS and TB, cigarette smoking, or even war. Some parts of the world more affected than others. For instance, in the U.S.A, where pollution is lower, life expectancy is reduced by only 0.1 years, compared to the WHO standard. In China and India, where pollution levels are significantly higher. Hence, the lowering particle concentrations to the WHO limit would enhance life expectancy by 2.6 and 5.9 years, respectively.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are Particulates and Air Pollution the same thing? */}
      <section className="particulates-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>Are Particulates and Air Pollution the same thing?</span>
              </h2>
              <p className="text-center">
                <span>PM or particulates are fine breathable particles suspended in the air. And, PM is one of the air pollutants that are included in air pollution. As, many other air pollutants together form the broad category of air pollution. These pollutants include Carbon monoxide, Sulphur Dioxide, Nitrogen oxides, Carbon Dioxide, etc. Hence, PM is nothing but a measure to measure air pollution along with other air pollutants.</span>
              </p>
              <img 
                className="aligncenter wp-image-63976 size-large" 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-pollutants-in-the-air.jpg" 
                alt="air pollution and particulate matters" 
                width="1024" 
                height="366" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Particulate Matter */}
      <section className="types-pm-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>Types of Particulate Matter (PM)</span>
              </h2>
              <p className="text-center">
                <span>For air quality regulation, particles divided into three categories based on their diameter. These are:</span>
              </p>
            </div>
          </div>
          <div className="row pm-types">
            <div className="col-md-4">
              <div className="pm-type-card">
                <img 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm1-size-300x300.png" 
                  alt="PM1" 
                  className="aligncenter"
                />
                <h4 className="text-center"><strong>PM1</strong></h4>
                <p className="text-center">These are ultra-fine particles with a size of 1 micron or less. Examples: Airborne pathogens, bacteria, viruses, etc.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pm-type-card">
                <img 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm2.5-size-300x300.png" 
                  alt="PM2.5" 
                  className="aligncenter"
                />
                <h4 className="text-center"><strong>PM2.5</strong></h4>
                <p className="text-center">These are fine breathable particles with a size of 2.5 microns or less. Examples: Smoke, tobacco smoke, haze, etc</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pm-type-card">
                <img 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/pm10-size-300x300.png" 
                  alt="PM10" 
                  className="aligncenter"
                />
                <h4 className="text-center"><strong>PM10</strong></h4>
                <p className="text-center">The inhalable particles with a size of 10 microns or less come under this category. Examples: Windblown dust, mold spores, pollen, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where does Particulate Matter come from */}
      <section className="pm-sources-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>Where does Particulate Matter (PM) come from and its main sources?</span>
              </h2>
              <p className="text-center">
                <span><strong>1. Primary particulate matter (PM)</strong> is directly released into the atmosphere. Because, they are produced by a multitude of sources, including cars, trucks, buses, factories, building sites, replanted fields, dirt roads, rock crushers, and wood burning.</span>
              </p>
              <p className="text-center">
                <span><strong>2. Secondary particles</strong> may generate in the air as a result of gas chemical changes. Since, they are generated indirectly when gases emitted by burning fuels combine with sunlight and water vapor. Also, these can produce by the combustion of gasoline in automobiles, power plants, and other industrial activities.</span>
              </p>
              <p className="text-center">
                <img 
                  className="aligncenter wp-image-64013 size-large" 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/sources-of-particulate-matter-1024x452.jpg" 
                  alt="sources of particulate matter" 
                  width="1024" 
                  height="452" 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PM - Air Quality Guidelines */}
      <section className="pm-guidelines-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>PM - Air Quality Guidelines</span>
              </h2>
              <p className="text-center">
                <img 
                  className="wp-image-64034 aligncenter" 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/PM-Air-Quaity-Guidelines-1024x414.jpg" 
                  alt="PM Air Quality Guidelines" 
                  width="751" 
                  height="304" 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What level of Particulate Matter is unhealthy */}
      <section className="pm-unhealthy-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>What level of Particulate Matter (PM) is unhealthy?</span>
              </h2>
              <p className="text-center">
                <span>Most studies show that PM2.5 levels of 12 μg/m3 or below are deemed healthy, with little to no danger from exposure. But, if the quantity reaches or exceeds 35 μg/m3 in 24 hours, the air is classified as hazardous. Hence, it might create problems for persons who already have breathing problems, such as asthma. Moreover, prolonged exposure to levels exceeding 50 μg/m3 can result in major health problems and untimely death.</span>
              </p>
            </div>
          </div>
          
          {/* Tabs for AQI */}
          <div className="aqi-tabs">
            <div className="tab-buttons">
              <button 
                className={activeTab === "AQI" ? "active" : ""} 
                onClick={() => setActiveTab("AQI")}
              >
                AQI
              </button>
              <button 
                className={activeTab === "PM25" ? "active" : ""} 
                onClick={() => setActiveTab("PM25")}
              >
                PM 2.5
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === "AQI" && (
                <div className="tab-inner-aqi">
                  <div className="aqi-levels">
                    <div className="aqi-level good-sec-top">
                      <div className="inner-good-sec">
                        <h4>0-50</h4>
                      </div>
                      <h5>Good</h5>
                    </div>
                    <div className="aqi-level good-sec-top1">
                      <div className="inner-good-sec">
                        <h4>51-100</h4>
                      </div>
                      <h5>Moderate</h5>
                    </div>
                    <div className="aqi-level good-sec-top2">
                      <div className="inner-good-sec">
                        <h4>101-200</h4>
                      </div>
                      <h5>Poor</h5>
                    </div>
                    <div className="aqi-level good-sec-top3">
                      <div className="inner-good-sec">
                        <h4>201-300</h4>
                      </div>
                      <h5>Unhealthy</h5>
                    </div>
                    <div className="aqi-level good-sec-top4">
                      <div className="inner-good-sec">
                        <h4>301-400</h4>
                      </div>
                      <h5>Severe</h5>
                    </div>
                    <div className="aqi-level good-sec-top5">
                      <div className="inner-good-sec">
                        <h4>401-500</h4>
                      </div>
                      <h5>Hazardous</h5>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "PM25" && (
                <div className="tab-inner-aqi">
                  <div className="aqi-levels">
                    <div className="aqi-level good-sec-top">
                      <div className="inner-good-sec">
                        <h4>0-30</h4>
                      </div>
                      <h5>Good</h5>
                    </div>
                    <div className="aqi-level good-sec-top1">
                      <div className="inner-good-sec">
                        <h4>31-60</h4>
                      </div>
                      <h5>Moderate</h5>
                    </div>
                    <div className="aqi-level good-sec-top2">
                      <div className="inner-good-sec">
                        <h4>61-90</h4>
                      </div>
                      <h5>Poor</h5>
                    </div>
                    <div className="aqi-level good-sec-top3">
                      <div className="inner-good-sec">
                        <h4>91-120</h4>
                      </div>
                      <h5>Unhealthy</h5>
                    </div>
                    <div className="aqi-level good-sec-top4">
                      <div className="inner-good-sec">
                        <h4>121-250</h4>
                      </div>
                      <h5>Severe</h5>
                    </div>
                    <div className="aqi-level good-sec-top5">
                      <div className="inner-good-sec">
                        <h4>250+</h4>
                      </div>
                      <h5>Hazardous</h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why you should care about PM */}
      <section className="pm-care-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                <span>Why you should care about</span>
              </h2>
              <h3 className="text-center">
                <span>Particulate Matter (PM)?</span>
              </h3>
              <p className="text-center">
                <span>Particulates are smaller, microscopic particles invisible to the naked eye. Thus, PM1 and PM2.5 can enter your bloodstream via respiration. Further, Short-term and long-term exposure to PM has a variety of health effects including various cardiorespiratory diseases. Hence, short-term impacts include irritation in the eyes, nose, and throat. And long-term impacts are permanent respiratory problems such as asthma and bronchitis, heart diseases, and heart failure.</span>
              </p>
            </div>
          </div>
          <div className="row pm-effects">
            <div className="col-md-1-5">
              <img 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/eyes-273x300.png" 
                alt="eye irritation due to pm" 
                className="aligncenter"
              />
              <p className="text-center">
                <span>Irritation in the eyes</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/Nose-269x300.png" 
                alt="nose irritation due to pm" 
                className="aligncenter"
              />
              <p className="text-center">
                <span>Irritation in the nose</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/throat-269x300.png" 
                alt="throat irritation due to pm" 
                className="aligncenter"
              />
              <p className="text-center">
                <span>Irritation in the throat</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/asthma-269x300.png" 
                alt="asthma problem due to pm" 
                className="aligncenter"
              />
              <p className="text-center">
                <span>Asthma Problem</span>
              </p>
            </div>
            <div className="col-md-1-5">
              <img 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/heart-269x300.png" 
                alt="heart diseases due to pm" 
                className="aligncenter"
              />
              <p className="text-center">
                <span>Heart diseases and Heart failure</span>
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>Can it make me sick by PM?</span>
              </h3>
              <p className="text-center">
                <span>Without a doubt, YES! Even in small amounts, particulate can make you feel uneasy or sick.</span>
              </p>
              <img 
                className="aligncenter" 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/sick-due-to-pm-air-pollution-600x1024.png" 
                alt="sick due to pm air pollution" 
                width="335" 
                height="571" 
              />
              
              <h3 className="text-center">
                <span>Health Impacts of PM on Human Health</span>
              </h3>
              <p className="text-center">
                <span>The ability of a particle to evade the bodys defences and enter the lungs deeply increases with particle size. But, people with respiratory and heart conditions, children, and the elderly may be more vulnerable to PM2.5. Furthermore, Long-term exposure to fine particulate matter may also be associated with increased cases of chronic bronchitis, impaired lung function, and an increase in mortality rates from cardiorespiratory disease, according to research.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to reduce PM exposure */}
      <section className="pm-reduce-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>How to reduce Particulate Matter (PM) exposure?</span>
              </h3>
              <p className="text-center">
                <span>PM can be present in both indoor and outdoor environments. So, you can easily monitor the PM levels in both environments using a PM air quality monitor.</span>
              </p>
              
              <h4 className="text-center">
                <strong><span>Indoor solution</span></strong>
              </h4>
              <p className="text-center">
                <span>PM (Particulate Matter) can be easily monitored indoors. After the monitoring, if the levels exceed the limits so the proper measures can be taken to reduce the levels.</span>
              </p>
              <img 
                className="aligncenter" 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/air-purifier-as-the-solution-for-indoor-air-pollution.jpg" 
                alt="air purifier as the solution for indoor air pollution" 
                width="828" 
                height="693" 
              />
              
              <h4 className="text-center">
                <strong><span>Outdoor Solution</span></strong>
              </h4>
              <p className="text-center">
                <span>We have a variety of outdoor air quality monitors that can measure the PM levels outdoors. As, when the levels exceed the limits, you can wear anti-pollution N-95 mask. As to prevent you from various hazards that can be caused to the PM / dust exposure.</span>
              </p>
              <p className="text-center">
                <img 
                  className="aligncenter" 
                  src="https://www.pranaair.com/wp-content/uploads/2022/12/N95-air-pollution-mask.jpg" 
                  alt="N95 air pollution mask" 
                  width="504" 
                  height="473" 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PM2.5 Air Quality Monitor */}
      <section className="pm-monitor-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>PM2.5 Air Quality Monitor</span>
              </h3>
              <p className="text-center">
                <span>Prana Air Pocket Monitor allows you to check real-time PM2.5 pollution levels indoors and outdoors. For it, Our pocket-sized monitor is the smallest and most convenient device. As it fits effortlessly into your pocket.</span>
              </p>
              
              <img 
                className="aligncenter" 
                src="https://www.pranaair.com/wp-content/uploads/2022/12/pm2.5-air-quality-monitor-1024x546.png" 
                alt="pm2.5 air quality monitor" 
                width="779" 
                height="415" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Air Quality Monitor */}
      <section className="pm-products-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                <span>Choose Your Air Quality Monitor To Measure PM</span>
              </h3>
              
              {/* Product Carousel */}
              <div className="product-carousel">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5s"
                  transitionDuration={500}
                >
                  <div className="product-item">
                    <img 
                      src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-smart-portable-monitor-300x300.png" 
                      alt="prana air Pocket PM2.5 Monitor" 
                    />
                    <h4>Pocket Monitor</h4>
                    <p>Portable PM2.5 Air Quality Monitor</p>
                  </div>
                  <div className="product-item">
                    <img 
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-squair-air-monitor-300x300.jpg" 
                      alt="prana air squair PM2.5 air quality monitor" 
                    />
                    <h4>SQUAIR Air Monitor</h4>
                    <p>Carbon Monoxide Air Quality Monitor</p>
                  </div>
                  <div className="product-item">
                    <img 
                      src="https://www.pranaair.com/wp-content/uploads/2021/04/prana-air-sensible-plus-air-quality-monitor-300x300.jpg" 
                      alt="prana air sensible plus PM2.5 monitor" 
                    />
                    <h4>Sensible Plus Monitor</h4>
                    <p>Carbon Dioxide Air Quality Monitor</p>
                  </div>
                  <div className="product-item">
                    <img 
                      src="https://www.pranaair.com/wp-content/uploads/2023/03/Sensible-monitor-prana-air-180x180.png" 
                      alt="prana air senible pm2.5 monintor" 
                    />
                    <h4>Sensible Air Monitor</h4>
                    <p>TVOC Air Quality Monitor</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
