
import FaqAccordion from "@/Components/Pages/Carfilter/faq-accordion"
import "./style.css"
import "react-multi-carousel/lib/styles.css"

export default function CarAirFilter() {

  // FAQ items data
  const faqItems = [
    {
      question: "1. What is Prana Air Car Cabin Air Filter?",
      answer:
        "Prana Air Car Cabin Air Filter is a high-efficiency air filtration system with HEPA and activated carbon filter, designed to purify the air inside your vehicle. It removes dust, pollen, allergens, and other airborne particles to ensure a clean and healthy breathing environment while you drive.",
    },
    {
      question: "2. How does Prana Air Car Cabin Air Filter work?",
      answer:
        "Our air filter utilizes advanced multi-layer filtration technology, including HEPA and activated carbon layers. The HEPA filter captures fine particulate matter, while the activated carbon layer absorbs odors, gases, and volatile organic compounds (VOCs), ensuring fresh and clean air inside your car.",
    },
    {
      question: "3. Why should I choose Prana Air Car Cabin Air Filter over other brands?",
      answer:
        "Prana Air Car Cabin Air Filters are designed with cutting-edge filtration technology and superior materials to provide maximum efficiency and durability. They are tested and proven to remove up to 99% of pollutants and allergens, making them an excellent choice for individuals seeking better air quality in their vehicles.",
    },
    {
      question: "4. How often should I replace Prana Air Car Cabin Air Filter?",
      answer:
        "For optimal performance, we recommend replacing Prana Air Car Cabin Air Filter every 6 to 12 months, depending on your driving conditions and the level of pollution in your area. Regular replacement ensures continuous protection against airborne contaminants.",
    },
    {
      question: "5. Can I install Prana Air Car Cabin Air Filter myself?",
      answer:
        "Yes, Prana Air Car Air Filter is designed for easy installation. Each filter comes with clear instructions, and no special tools are required. If you need assistance, our customer support team is always available to help.",
    },
    {
      question: "6. Is Prana Air Car Air Filter compatible with my vehicle?",
      answer:
        "Prana Air Car Cabin Air Filter is available in various sizes to fit a wide range of vehicle makes and models. Please refer to our compatibility guide or contact our customer service to find the right filter for your car.",
    },
    {
      question: "7. What benefits can I expect from using Prana Air Car Cabin Air Filter?",
      answer:
        "By using Prana Air Car Cabin Air Filter, you can expect to experience cleaner, fresher air inside your car. This can lead to reduced allergic reactions, improved respiratory health, and a more pleasant driving experience free from unpleasant odors and harmful pollutants.",
    },
    {
      question: "8. How do I know when its time to replace the filter?",
      answer:
        "There is no indicator to tell you about the replacement, but you have to check it manually. Its life depends on the frequency of use, rides and air quality level of the area. Regular checks can help maintain optimal air quality.",
    },
    {
      question: "9. Where can I purchase Prana Air Car Cabin Air Filter?",
      answer:
        "It is available for purchase on our official website, as well as through Amazon online. Be sure to buy from trusted sources to guarantee the authenticity of the product.",
    },
    {
      question: "10. Does Prana Air Car Cabin Air Filter come with a warranty?",
      answer:
        "Usually, warranty is not given to Filters. Most of the marketers also dont provide warranty on filters. But, you can avail the replacement option if there is any defect when you receive the product for the first time.",
    },
    {
      question: "11. Can Prana Air Car Cabin Air Filter help with car exhaust fumes?",
      answer:
        "Yes, the activated carbon layer in the filter is specifically designed to absorb harmful gases and odors, including car exhaust fumes. This helps to reduce the presence of these pollutants inside your vehicle.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-heding">
                <h1>Anti-Pollution</h1>
                <h2>Car Cabin Filter</h2>
                <p>Use Prana Airs Car Air Filter As Air Purifier For Your Car. Stay Healthy!</p>
                <div className="car-filter-price">
                  <span className="woocs_price_code">
                    <span className="woocommerce-Price-amount amount">₹1,990.00</span>
                  </span>
                </div>
                <a href="https://www.pranaair.com/product/car-cabin-air-filter/">Buy Now</a>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Car Air Pollution Section */}
      <section className="car-air-pollution-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="car-air-heading">
                <h2>Problems of Car Air Pollution</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="problem-of-car-solution mob-scroll">
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Figure-nitroge.png"
                      alt="NO2 gas Higher Emissions"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/High-Nitrogen-Dioxide.jpg"
                      alt="Higher Emissions of cars"
                    />
                    <h3>Higher Emissions</h3>
                    <p className="cair-air-pollution-para">Poor air quality exacerbates environmental pollution.</p>
                  </div>
                </li>
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Figure-lungs.png"
                      alt="Cardiovascular Issues"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Health-issues.jpg"
                      alt="Cardiovascular Issues due to bad air pollution in car"
                    />
                    <h3>Cardiovascular Issues</h3>
                    <p className="cair-air-pollution-para">
                      Inhaling pollutants increases heart attack and stroke risks.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Figure-respiratory-icon.png"
                      alt="respiratory icon"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/PM2.5-exposure.jpg"
                      alt="Driver Fatigue due to the exposure to PM2.5 pollution in car"
                    />
                    <h3>Driver Fatigue</h3>
                    <p className="cair-air-pollution-para">
                      Poor air quality induces drowsiness, heightening accident risks.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Respiratory-icons.png"
                      alt="Respiratory icons"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Respiratory-Problems.webp"
                      alt="Respiratory Problems due to car air pollution"
                    />
                    <h3>Respiratory Problems</h3>
                    <p className="cair-air-pollution-para">
                      Exposure to pollutants like PM2.5 and NO2 leads to asthma and bronchitis.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Unpleasant-Odors-icon.png"
                      alt="Unpleasant Odors icon"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Unpleasant-Odors.webp"
                      alt="Unpleasant Odors in car due to air pollution"
                    />
                    <h3>Unpleasant Odors</h3>
                    <p className="cair-air-pollution-para">
                      VOCs from vehicle emissions, fuel vapors, and upholstery materials create bad smells inside your
                      car.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="car-air-pollution-card">
                    <img
                      className="car-air-pollution-icon"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Bad-Driving-Experience-icon.png"
                      alt="Bad Driving Experience icon"
                    />
                    <img
                      className="high-nitro-di-img"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Bad-Driving-Experience.webp"
                      alt="Bad Driving Experience due to car air pollution"
                    />
                    <h3>Bad Driving Experience</h3>
                    <p className="cair-air-pollution-para">
                      Drowsiness, fatigue, and impaired concentration from poor air quality contribute to accidents.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Using Car Filter Section */}
      <section className="using-car-filter-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="using-car-filter-heading">
                <h2>Do you know how a Car Air Filter can improve the air quality inside your vehicle</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row pd">
            <div className="col-md-6 using-bg">
              <div className="using-para">
                <p>
                  If it is yes, so its time to check your car cabin air filter. Because most standard air filters only
                  circulate the air inside your car rather than purifying. It means the air is not clean inside your car
                  even with filters.
                </p>
                <p>
                  Check out the Prana Air Car Cabin Air Filter or the car air purifier. Gets the advanced features of
                  multi-filtration technology. It captures the fine dust particles to ensures to purify and freshens the
                  air for better air quality to breathe.
                </p>
                <p>
                  The state-of-the-art filtration process makes it filters the fine pollutants. Also, filters capture
                  any foul smell with fine particles entering your cas atmosphere.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="using-car-air-filter-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Considered-Using-a-Car-Air-Filter.jpg"
                  alt="Using car cabin air filter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use The Right Filter Section */}
      <section className="use-the-right-filter-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="use-right-filter-heading">
                <h2>Ensuring Clean Air in Your Vehicle: Why the Right Car Air Filter Matters</h2>
              </div>
            </div>
          </div>
          <div className="row car-mob-row">
            <div className="col-md-12">
              <ul className="car-filter">
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Prevent-Indoor-Air-Pollution.png"
                        alt="Improved Air Quality in car by using car cabin air filter"
                      />
                      <h3>Fresh Air</h3>
                      <p>
                        Reduces respiratory irritation and allergy symptoms by filtering dust, pollen, allergens,
                        bacteria, and pollutants.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Reduces-Odors.png"
                        alt="Reduces Odors by using car cabin air filter"
                      />
                      <h3>Reduces Odors</h3>
                      <p>
                        Activated carbon filter eliminate unpleasant smells (VOCs) and harmful gases for a fresher
                        cabin.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Allergen-Reduction-1.png"
                        alt="Allergen Reduction"
                      />
                      <h3>Allergen Reduction</h3>
                      <p>
                        Filters out pollen and allergens, making the cabin more comfortable for sensitive passengers.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Focus-and-Comfort-1.png"
                        alt="Focus and Comfort"
                      />
                      <h3>Focus and Comfort</h3>
                      <p>
                        Clean, odor-free air enhances driver comfort and focus, reducing distractions for safer driving.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Fresher-Air.png"
                        alt="Fresher Air by using car cabin air filter"
                      />
                      <h3>Fresher Air</h3>
                      <p>Provides a pleasant environment, especially during allergy seasons or in polluted areas.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="right-filter-box-main">
                    <div className="indor-box">
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2024/06/Cleaner-Interior.png"
                        alt="Cleaner Interior by using car cabin air filter"
                      />
                      <h3>Cleaner Interior</h3>
                      <p>Prevents dust and debris from entering, reducing the need for frequent cleaning.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Healthier Section */}
      <section className="breathe-healthier-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="breathe-healthier-heaidng">
                <h2>
                  Breathe <strong>healthier</strong> and <strong>Drive easier</strong>
                </h2>
                <p>
                  Prana Air Car Cabin Air Filter traps pollutants from the air inside your car and provides clean air to
                  Breathe comfortably and drive safely.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Filtration Technology Section */}
      <section className="filtration-tec-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="filtration-tec-heading">
                <h2>Prana Air Car Filtration Technology</h2>
                <p>Multi-Layer HEPA + Activated Carbon Filter</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="filtration-tec-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Filtration-Technology.png"
                  alt="multiple layers of prana air car cabin air filter with HEPA and activated carbon layers"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="filrtion-tech-point">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/car-hepa-filter.png"
                      alt="car cabin hepa filter in prana air car cabin air filter"
                    />
                  </li>
                  <li>
                    <h3>High Efficiency & Low Resistance Hepa</h3>
                    <p>
                      It blocks a high concentration of dust and dirt particles, pollen and second hand smoke from
                      entering your lungs.
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/OXYGEN-GENERATION.png"
                      alt="oxygen molecular sieves in prana air car cabin air filter"
                    />
                  </li>
                  <li>
                    <h3>Manufacture of Oxygen molecular Sieves</h3>
                    <p>The oxygen generating molecular sieve produces fresh, new oxygen.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/FORMALDEHYDE-CATALYST.png"
                      alt="formaldehyde catalyst in prana air car cabin air filter"
                    />
                  </li>
                  <li>
                    <h3>Formaldehyde catalyst</h3>
                    <p>The catalyst removes the HCHO to improve the quality of the air.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/NANO-CYSTALLINE-CARBON.png"
                      alt="nanocystalline carbon in prana air car cabin air filter"
                    />
                  </li>
                  <li>
                    <h3>Nanocystalline Carbon</h3>
                    <p>
                      The carbon enables the removal of VOCs from off gasses, with reduction efficiencies above 99%.
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/PHOTO-CATALYSTS-COATING.png"
                      alt="photocatalyst coating network in prana air car cabin air filter"
                    />
                  </li>
                  <li>
                    <h3>Photocatalyst coating network</h3>
                    <p>
                      In the presence of light, the photo catalyst transforms the coated surface, creating air
                      purification and cleans the fine dust particles from inside the car.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Protection Section */}
      <section className="ultimate-sec">
        <div className="container">
          <div className="row mob-row">
            <div className="col-md-6">
              <div className="ultimate-heading">
                <h2>
                  Ultimate protection for <strong>Your Loved once</strong>
                </h2>
                <p>
                  The multi-layer filter absorb various pollutants in one time and offers more filtering power and a
                  longer service life
                </p>
                <a href="https://www.pranaair.com/product/car-cabin-air-filter/">Buy Now</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ultimate-protection-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Unltimate-protection.png"
                  alt="layers of prana air car cabin air filter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guards You From Section */}
      <div className="container">
        <div className="row guards-heading-box">
          <div className="col-md-6">
            <div className="gurad-heading">
              <h2>Guards You From</h2>
              <p>
                Prana Airs Car cabin air filter safeguards you from harmful air pollutants, ensuring a healthier and
                more enjoyable driving experience.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="guard-img">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2024/06/guard.png"
                alt="protection from car air pollution"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="gurad-for-you-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="pollutants-box">
                <ul>
                  <li>
                    <img
                      className="pollen"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/pollen.png"
                      alt="air pollution in car by pollen"
                    />
                  </li>
                  <li>
                    <img
                      className="smog"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Smog.png"
                      alt="air pollution in car by smog"
                    />
                  </li>
                  <li>
                    <img
                      className="dust"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Dust.png"
                      alt="air pollution in car by dust"
                    />
                  </li>
                  <li>
                    <img
                      className="mites"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Mites.png"
                      alt="air pollution in car by by mites"
                    />
                  </li>
                  <li>
                    <img
                      className="odor"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/Odor.png"
                      alt="air pollution in car by odor"
                    />
                  </li>
                  <li>
                    <img
                      className="soot"
                      src="https://www.pranaair.com/wp-content/uploads/2024/06/soot.png"
                      alt="air pollution in car by soot"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Fresh Air Section */}
      <section className="enjoy-fresh-air-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="enjoy-fresh-air-heading">
                <h2>Enjoy Fresh Air for Up to</h2>
                <h3>2 Years on a 15,000km Drive</h3>
                <span className="approx">(Approximately)</span>
                <p>
                  Various factors, including usage patterns, driving distance, outdoor pollution levels, and more,
                  contribute to filter longevity.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="enjoy-fresh-air-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Car-Cabin-filter-page-gif.gif"
                  alt="air pollution filtration by prana air car cabin air filter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Install Section */}
      <section className="how-to-install-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="how-to-install-img">
                <h2>How to install a car cabin air filter?</h2>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/How-to-install-a-car-cabin-air-filte.jpg"
                  alt="how to install Prana Air Car cabin air filter"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="how-to-install-filter-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Car-Filter-Installation-Guide.png"
                  alt="installation of Prana Air car cabin air filter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason to Choose Section */}
      <section className="reason-to-choose-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="reason-to-choose-heading">
                <h2>Reason To Choose Prana Air Car Cabin Air Filter</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6 red-box">
              <div className="reason-to-choose-filter-box">
                <h3>Standard Filter</h3>
                <p>
                  Standard filters holds the single layer for air filtration that does not effectively capture various
                  pollutants present in the car atmosphere.
                </p>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Standard-Filter.png"
                  alt="Bad AQI air quality after using standard or normal car cabin filter"
                />
                <p className="para-filter">
                  Regular car Cabin air filter only circulates air from the outside to inside of the car and captures
                  dust particles.
                </p>
              </div>
            </div>
            <div className="col-md-6 green-box">
              <div className="reason-to-choose-filter-box">
                <h3>Prana Air Car Air Filter (HEPA)</h3>
                <p>
                  The prana air car filter has several layers that actively capture all pollutants from the air before
                  entering into the car atmosphere.
                </p>
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Prana-Air-Car-Air-Filter-HEPA.png"
                  alt="Good AQI air quality after using Prana Air car cabin filter"
                />
                <p className="para-filter">
                  Prana Air car cabin filter purifies the air by capturing fine dust particles & odor from your car and
                  creates a fresh indoor living environment for a healthy ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <div className="container">
        <div className="row tab-btn-row">
          <div className="col-md-6 red-bg">
            <div className="diff-table-heading">
              <h2>Standard Filter</h2>
            </div>
            <div className="diff-table-para">
              <h3>Standard Filter</h3>
              <p>Standard filters can trap particles of 10 microns.</p>
            </div>
            <div className="diff-table-para">
              <h3>Less-Protection</h3>
              <p>Cannot protect from carbon monoxide, sulfur dioxide and other gases.</p>
            </div>
            <div className="diff-table-para">
              <h3>Efficiency</h3>
              <p>These filters typically remove between 80% and 95% of pollutants.</p>
            </div>
          </div>
          <div className="col-md-6 green-bg">
            <div className="diff-table-heading">
              <h2>Prana Air Car Air Filter (HEPA)</h2>
            </div>
            <div className="diff-table-para">
              <h3>HEPA Filter</h3>
              <p>Prana Air filter can trap small particles as 0.3 microns.</p>
            </div>
            <div className="diff-table-para">
              <h3>Better Protection</h3>
              <p>Activated carbon layer protects from harmful gases.</p>
            </div>
            <div className="diff-table-para">
              <h3>Adequate Efficiency</h3>
              <p>These filters can theoretically remove at least 99.97% of pollutants.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prana Air Cabin Filter Section */}
      <section className="prana-air-cabin-filter-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="car-cabin-filter-heading">
                <h2>Prana Air Cabin Filter</h2>
                <p>Check-out the air quality in two cars with air filters and without air filters.</p>
                <ul>
                  <li>Air quality inside Car A</li>
                  <li>Air quality inside Car B</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="graph-img">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Prana-Air-Cabin-Filter-graph.jpg"
                  alt="Efficiency graph of Prana Air car cabin air filter"
                />
              </div>
              <div className="filter-graph-para">
                <p>
                  You can check the sudden down in PM2.5 measures in the car A after installing the Prana Air Car
                  Filter. And the level remains in the good category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available For Section */}
      <section className="available-for-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="available-for-heading">
                <h2>Available for</h2>
                <p>We have filters available for various car models.</p>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="brand-logo">
                <li>
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Toyota-car.png" alt="Toyota" />
                </li>
                <li>
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Skoda-car.png" alt="Skoda" />
                </li>
                <li>
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/hyundai.png" alt="Hyundai" />
                </li>
                <li>
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2024/06/Mercedes-benz.png"
                    alt="Mercedes-benz"
                  />
                </li>
                <li>
                  <img src="https://www.pranaair.com/wp-content/uploads/2024/06/Vlokswagen.png" alt="Volkswagen" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Select Car Brand Section */}
      <section className="select-car-brand-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="select-brand-heading">
                <h2>Select Car Brand</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="all-brands-list">
                <ul>
                  <li>
                    <h3>Maruti Suzuki</h3>
                  </li>
                  <li>Ciaz, Brezza, SX4, Swift (2015 to 2017), Ertiga, Dzire 2017, Baleno, Alto</li>
                </ul>
                <ul>
                  <li>
                    <h3>Honda</h3>
                  </li>
                  <li>City, Amaze, Jazz, WR-V, Civic, Accord</li>
                </ul>
                <ul>
                  <li>
                    <h3>Toyota</h3>
                  </li>
                  <li>Innova Crysta, Corolla Altis, Fortuner</li>
                </ul>
                <ul>
                  <li>
                    <h3>Hyundai</h3>
                  </li>
                  <li>i10, i20, Verna, Creta</li>
                </ul>
                <ul>
                  <li>
                    <h3>Ford</h3>
                  </li>
                  <li>Ford EcoSport, Ford Aspire</li>
                </ul>
                <ul>
                  <li>
                    <h3>Skoda</h3>
                  </li>
                  <li>Skoda Octavia</li>
                </ul>
                <ul>
                  <li>
                    <h3>Volkswagen</h3>
                  </li>
                  <li>Polo, Vento</li>
                </ul>
                <ul>
                  <li>
                    <h3>Chevrolet</h3>
                  </li>
                  <li>Cruze</li>
                </ul>
                <ul>
                  <li>
                    <h3>Mahindra</h3>
                  </li>
                  <li>Scorpio</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brand-btn">
                <a className="buy-btn" href="https://www.pranaair.com/product/car-cabin-air-filter/">
                  Buy Now
                </a>
                <a
                  className="amazon-btn"
                  href="https://www.amazon.in/stores/page/195BC2CC-2B06-4801-895E-55E27CA6330F"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="faq-heading">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FaqAccordion faqItems={faqItems} />
          </div>
        </div>
      </div>
    </main>
  )
}
