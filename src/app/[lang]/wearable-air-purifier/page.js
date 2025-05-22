"use client"
import VideoPlayer from "@/Components/Pages/WearableAirpurifier/VideoPlayer"
import "./style.css"
import "react-multi-carousel/lib/styles.css"
import ProductSlider from "@/Components/Pages/PranaSensMonitor/product-slider"

export default function PranaAirPersonal() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      {/* Header Section */}
      <section className="header" id="new-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sticky-bar">
                <ul className="nav navbar-nav new-nav-bar" id="pranaNavbar">
                  <li className="nav-item">
                    <a className="nav-link active" href="#overview" data-bs-toggle="tab" role="tab">
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features" data-bs-toggle="tab" role="tab">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#dual" data-bs-toggle="tab" role="tab">
                      Dual-Ions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#comparison" data-bs-toggle="tab" role="tab">
                      Comparison
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#spec" data-bs-toggle="tab" role="tab">
                      Specs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-txt banner-txt-anim">
                <h4>Prana Air Personal</h4>
                <h2>Wearable Air</h2>
                <ul>
                  <li>P</li>
                  <li>u</li>
                  <li>r</li>
                  <li>i</li>
                  <li>f</li>
                  <li>i</li>
                  <li>e</li>
                  <li>r</li>
                </ul>
                Dual -VE Ions Emitter
                <div className="buy-now-box">
                  <button className="single_add_to_cart_button button alt button button_slide slide_right">
                    Buy Now{" "}
                    <img
                      className="banner-btn-arrow"
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/banner-btn-arrow.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-wearable-air-purifier.png"
                alt="Banner Girl"
                className="banner-girl-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elimination Section */}
      <div className="container">
        <div className="row elimation-heading">
          <div className="col-md-12">
            <div className="elimination-heading">
              <h3>
                <img
                  className="rotet"
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                  alt="heading ion icon"
                />
                Effective Elimination from various Pollutants
              </h3>
              Prana Air Personal Air Purifier, Ideal for Respiratory Disorders, Effectively Eliminates Pollutants for a
              Healthier Environment.
            </div>
          </div>
        </div>
      </div>

      <section className="elimination-bg-section">
        <div className="container">
          <div className="row mobile-layout">
            <div className="col-md-4 mobile-position-change">
              <div className="elimination-specs">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/ensuring-cleaner-air-icon.png"
                      alt="ensuring cleaner air icon"
                    />
                  </li>
                  <li>
                    <h5>Eliminates Pollen, ensuring cleaner air.</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src="https://www.pranaair.com/wp-content/uploads/2023/06/effectively-traps-icon.png" />
                  </li>
                  <li>
                    <h5>Effectively traps Dust Particles with our hanging purifier.</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-cleaning-pollutants.png"
                alt="Elimination Device"
                className="elimination-device-img"
              />
            </div>
            <div className="col-md-4">
              <div className="elimination-specs">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/tackles-harmful-icons.png"
                      alt="tackles harmful icons"
                    />
                  </li>
                  <li>
                    <h5>Tackles harmful PM2.5 for fresher indoor and outdoor environments.</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/remove-smoke-.png"
                      alt="remove smoke"
                    />
                  </li>
                  <li>
                    <h5>Removes Smoke, keeping surroundings fresh and clean.</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressive Features Section */}
      <section className="impressive-feature-section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="impressive-feature">
                <h3>Impressive Features</h3>
                <h5>That Redefine Air Purification</h5>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/high-density-negative-ion.png"
                        alt="high density negative ion"
                      />
                    </li>
                    <li>
                      <h4>Dual (-ve) Ion Emitters</h4>
                      High-Density Negative Ion Emission (80-150 million/cm3)
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/long-battery-life-icon.png"
                        alt="long battery life icon"
                      />
                    </li>
                    <li>
                      <h4>Long Battery Life</h4>
                      Long-lasting Power with up to 30-60 Hours of Battery Life.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/extended-runtime-icon.png"
                        alt="extended runtime icon"
                      />
                    </li>
                    <li>
                      <h4>Extended Runtime</h4>
                      Quick 2-Hour Charge, 45-Hour Purification with 700mAh Battery
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/ultra-quite-design-icon.png"
                        alt="ultra quite design icon"
                      />
                    </li>
                    <li>
                      <h4>Ultra Quiet Design</h4>
                      The Device Silently works its Magic by your side.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="impressive-feature-icon-box">
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-and-wearable-icon.png"
                        alt="portable and wearable icon"
                      />
                    </li>
                    <li>
                      <h4>Portable and Wearable</h4>
                      Purify the air on the go, wherever you are.
                    </li>
                  </ul>
                </div>
                <div className="impressive-feature-icons">
                  <ul>
                    <li>
                      <img
                        src="https://www.pranaair.com/wp-content/uploads/2023/06/no-filter-replacements-icon.png"
                        alt="no filter replacements icon"
                      />
                    </li>
                    <li>
                      <h4>No Filter Replacements</h4>
                      Hassle-free Maintenance with no Filter Replacement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/portable-personal-air-purifier.png"
                alt="Feature"
                className="frature-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Section */}
      <section className="wearable-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <img
                className="wearable-arrow-icon"
                src="https://www.pranaair.com/wp-content/uploads/2023/06/wearable-arrow-icon.png"
                alt="Wearable Arrow"
              />
              <div className="wearable-box">
                <h3>Wearable</h3>
                <h4>Air Purifier</h4>
                <p>
                  Experience effortless protection with our wearable air purifier. Easy to carry and use, it ensures
                  clean and fresh air wherever you go.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-wearable-purifier-1024x466.jpeg"
                alt="Wearable"
                className="wearable-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="benefit-section">
              <h3>The Benefits</h3>
              <h5>of Wearable Air Purification</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="benefit-bg-section">
        <div className="container">
          <div className="row benefits-colum">
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/healthier-breathing-icon.png"
                    alt="healthier breathing icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Healthier Breathing</h3>
                  <p>Eliminate pollutants and allergens for improved respiratory health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/enhanced-focus-icon.png"
                    alt="enhanced focus icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Enhanced Focus</h3>
                  <p>Breathe clean air to boost energy and mental clarity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 left-side">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/smoke-removal-icon.png"
                    alt="smoke removal icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Smoke Removal</h3>
                  <p>Say goodbye to secondhand smoke with effective smoke elimination.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/strong-immunity-icn.png"
                    alt="immunity icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Stronger Immunity</h3>
                  <p>Reduce exposure to pathogens and boost your immune system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="benefit-icon-box">
                <div className="benefit-icons">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/customizable-purification-icon.png"
                    alt="customizable-purification-icon"
                  />
                </div>
                <div className="benfit-txt">
                  <h3>Customizable Purification</h3>
                  <p>Adjust settings for personalized air cleansing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-work-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="how-to-work-text">
                <h3>
                  How It Works{" "}
                  <img
                    className="floating"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/negetive-ions-.png"
                    alt="negative-ions"
                  />
                </h3>
                <h5>Harnessing the Power of Negative Ions</h5>
                <p>
                  Harnessing Negative Ions for Healthier Air. Neutralizes harmful particles, enhances mood, and promotes
                  well-being. Breathe pure and revitalizing air now!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/dual-negative-ions-emitter-in-prana-air-purifier--768x637.png"
                alt="How Work"
                className="how-work-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="step-video-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  Efficiency Experiment: How <span className="prana">Prana Air</span> Personal Air Purifier Cleans The
                  Air Pollutants
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>
                  Find out how much filtration efficiency of Prana Airs Personal Wearable Air Purifier has. In this
                  experiment, you will be able to see the efficiency of the product cleaning the smoke inside the small
                  closed-chamber.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <VideoPlayer
                thumbnailSrc="https://www.pranaair.com/wp-content/uploads/2023/06/how-to-use-prana-wearable-purifier-video-thumbnail-1536x658.jpg"
                videoSrc="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-air-purifier-cleaning-smoke.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Operation Section */}
      <section className="effortless-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="effortless-heading">
                <h3>Effortless</h3>
                <p>Operation</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                      alt="power button"
                    />
                  </li>
                  <li className="long-press-top">
                    <h3>01</h3>
                    <p>
                      Long press the button to turn it on/off.and pressing the button once again shows blue (high gear).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/2nd-step-to-switch-the-mode-of-purifier.png"
                      alt="green indicator"
                    />
                  </li>
                  <li className="green-top">
                    <h3>02</h3>
                    <p>After the negative ion purifier is turned on, the indicator light shows green (low gear),</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="effortless-box">
                <ul>
                  <li>
                    <img
                      src="https://www.pranaair.com/wp-content/uploads/2023/06/red-indicator-when-need-to-charge.png"
                      alt="red indicator"
                    />
                  </li>
                  <li className="red-indicator-top">
                    <h3>03</h3>
                    <p>The low battery indicator light is red, and the indicator light is red when charging.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ionization Technology Section */}
      <section className="lonization-tech-section" id="dual">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6 lonization-colm-bg">
              <div className="lonization-text">
                <h4>Advanced</h4>
                <h3>Ionization technology</h3>
                <p>
                  Now with Dual Ionizer! Effortlessly purify and freshen the air you breathe. Breathe cleaner, feel
                  rejuvenated!
                </p>
              </div>
            </div>
            <div className="col-md-6 lonization-tech-img-bg">
              <div className="dual-icon-txt">
                <h4>Dual</h4>
                <h5>
                  Negative <span className="dual-icon">ion</span> emitter
                </h5>
              </div>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/lonization-technology-of-prana-air-purifier-738x1024.png"
                alt="Ionization Tech"
                className="lonization-tech-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stay Protected Section */}
      <section className="stay-protected-section">
        <div className="container">
          <div className="row mob-revers">
            <div className="col-md-6">
              <div className="stay-protect-txt">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-icon.jpg"
                  alt="Stay Protected Icon"
                />
                <h3>Stay Protected</h3>
                <h4>On-the-Go</h4>
                <p>
                  Experience effortless protection with our wearable air purifier. Easy to carry and use, it ensures
                  clean and fresh air wherever you go.
                </p>
              </div>
            </div>
            <div className="col-md-6 stay-protect-ing-bg">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/06/stay-protected-with-prana-air-purifier-768x499.jpeg"
                alt="Stay Protected"
                className="stay-protect-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="air-purifier-other-purifier-section" id="comparison">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="purifier-heading">
                <h3>Prana Airs</h3>
                <h5>Air Purifier</h5>
              </div>
            </div>
            <div className="col-md-5">
              <div className="other-purifier-heading">
                <h5>other</h5>
                <h6>Air Purifier</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 paran-purifier-col-bg">
              <div className="row">
                <div className="col-md-6">
                  <div className="dual-icon-txt parna-purifieri-txt">
                    <h4>Dual</h4>
                    <h5>
                      Negative <span className="dual-icon">ion</span> emitter
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-dual-negative-ions-emitters-768x739.png"
                    alt="Prana Purifier"
                    className="prana-purifier-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 other-purifier-col-bg">
              <div className="row">
                <div className="col-md-6">
                  <div className="other-purifieri-txt">
                    <h4>single</h4>
                    <h5>Negative ion emitter</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/other-purifier-with-single-ion-emitter-300x435.png"
                    alt="Other Purifier"
                    className="other-purifier-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Application Video Section */}
      <section className="step-video2-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-heading">
                <h4>
                  Product Application: Use of <span className="prana">Prana Air</span> Personal Air Purifier
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-paara">
                <p>
                  This innovative personal air purifier can be used by anyone anytime at home or any workplace. The
                  small air purifier can help you breathe clean air and give your safety from the unhealthy air quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <VideoPlayer
                thumbnailSrc="https://www.pranaair.com/wp-content/uploads/2023/06/paran-air-purifier-video-thumbnail.jpeg"
                videoSrc="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-personal-air-purifier-cleaning-smoke.mp4"
                iconSrc="https://www.pranaair.com/wp-content/uploads/2023/06/video-play-icon-button.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age Group Section */}
      <section className="every-age-group-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="age-group-heading">
                <h3>For Every</h3>
                <h4>Age Group</h4>
              </div>
            </div>
          </div>
          <div className="row mob-scroll">
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/personal-air-purifier-for-child-768x735.jpeg"
                  alt="Kids"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Kids</h4>
                <p>Clean air for little lungs, Prana Air cares!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/use-of-prana-air-purifier-in-office-768x735.jpeg"
                  alt="Adults"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Adults</h4>
                <p>Breathe easy with Prana Air, your daily companion.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="age-group-imgs">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/06/old-man-using-personal-air-purifier-768x735.jpeg"
                  alt="Old Age"
                />
              </div>
              <div className="age-group-txt-para">
                <h4>Old Age</h4>
                <p>Nurture your health with Prana Air, age gracefully.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Details Section */}
      <section className="attractive-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="benefit-section attractive-heading">
                <h3>
                  <img
                    className="rotet"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                    alt="heading ion icon"
                  />{" "}
                  Attractive
                </h3>
                <h5>details for easy carrying</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 attractive-dark-colm">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-feature-heading">
                    <ul className="left-heading">
                      <li>
                        <h4>
                          Low Gear
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt="Feature Line"
                          />
                        </h4>
                      </li>
                      <li>
                        <h4>
                          High Gear{" "}
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line.png"
                            alt="Feature Line"
                          />
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/prana-air-wearable-air-purifier-300x443.png"
                    alt="Product Feature"
                    className="product-feature-img"
                  />
                </div>
                <div className="col-md-4">
                  <div className="product-feature-heading">
                    <ul className="right-heading">
                      <li>
                        <h4>
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt="Feature Line"
                          />
                          Battery indicater
                        </h4>
                      </li>
                      <li>
                        <h4>
                          <img
                            className="deskshow"
                            src="https://www.pranaair.com/wp-content/uploads/2023/06/feature-line-upper.png"
                            alt="Feature Line"
                          />{" "}
                          ON &amp; OFF Switch Key
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 attractive-light-colm">
              <div className="row mobile-revres-coulm">
                <div className="col-md-6 mob-down-postion">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/air-purifier-type-c-charging-300x481.png"
                    alt="Type C Charger"
                    className="type-c-charger-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="type-c-heading">
                    <h3>Type C</h3>
                    <h5>Charging Port</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-revres-coulm">
            <div className="col-md-6 attractive-hanging-colm">
              <div className="row mobile-flex-dric">
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/hanging-device-img-300x463.png"
                    alt="Hanging Device"
                    className="hanging-device-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="type-c-heading hanging-heading">
                    <h3>Hanging</h3>
                    <h5>Thread</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 two-modes-colm">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/two-modes-of-speed-in-prana-air-personal-air-purifier-768x876.png"
                    alt="Two Modes"
                    className="two-modes-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="two-mode-heading">
                    <h3>2 Adjustable Modes</h3>
                    <ul>
                      <li>High Gear</li>
                      <li>Low Gear</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="technical-spec-section" id="spec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="technical-spec-heading">
                <h3>
                  <img
                    className="rotet"
                    src="https://www.pranaair.com/wp-content/uploads/2023/06/heading-ion-icon.png"
                    alt="heading ion icon"
                  />{" "}
                  Product
                </h3>
                <h5>Technical specifications</h5>
              </div>
            </div>
            <div className="col-md-8">
              <div className="brochore-btn">
                <a href="#">
                  <img src="https://www.pranaair.com/wp-content/uploads/2023/05/brochore-btn.png" alt="brochore-btn" />{" "}
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="row mid-box">
            <div className="col-md-4 box-line">
              <div className="product-specifi shdw-line">
                <p>Negative ion concentration :</p>
                <h4>80-150 million /cm3</h4>
              </div>
              <div className="product-specifi mrg-btm">
                <p>Product weight :</p>
                <h4>42g</h4>
              </div>
              <div className="product-specifi">
                <p>Input voltage :</p>
                <h4>DC5V C</h4>
              </div>
            </div>
            <div className="col-md-4 mob-product-spec-box1">
              <div className="product-specifi shdw-line">
                <p>Model :</p>
                <h4>M8</h4>
              </div>
              <div className="product-specifi mob-mrg-btm">
                <p>Battery capacity :</p>
                <h4>700mAh</h4>
              </div>
              <div className="product-specifi">
                <p>Battery life. :</p>
                <h4>30-60h</h4>
              </div>
            </div>
            <div className="col-md-4 mob-product-spec-box2">
              <div className="product-specifi">
                <p>Charging time :</p>
                <h4>About 2 hours</h4>
              </div>
              <div className="product-specifi mob-mrg-btm">
                <p>Size :</p>
                <h4>72*35*20mm</h4>
              </div>
              <div className="product-specifi">
                <p>Filter :</p>
                <h4>No filter replacement</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section className="customize-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="customize-slider-heading">
                <h2>Customize</h2>
                <h4>Your Air Purification Experience</h4>
              </div>
            </div>
            <div className="col-md-9">
              <ProductSlider responsive={responsive} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tab-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="frequently-asked-questions">
                    <h4>Frequently Asked Questions</h4>
                  </div>
                </div>
                <div className="col-md-8"></div>
              </div>

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
                      1. How does Prana Air Personal Air Purifier work?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Prana Air Personal Air Purifier utilizes advanced high-density dual negative ion emitters to
                      purify the air around you, providing cleaner and healthier air to breathe.
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
                      2. Is Prana Air Personal Air Purifier suitable for people with respiratory conditions?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, Prana Air Personal Air Purifier is designed to improve air quality and can be beneficial for
                      individuals with respiratory conditions by reducing pollutants and allergens in the surrounding
                      air.
                    </div>
                  </div>
                </div>

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
                      3. How long does the battery of Prana Air Personal Air Purifier last?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The battery of Prana Air Personal Air Purifier can last up to 45 hours on a single charge,
                      providing long-lasting usage before requiring a recharge.
                    </div>
                  </div>
                </div>

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
                      4. Is Prana Air Personal Air Purifier easy to use?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Prana Air Personal Air Purifier features user-friendly controls, making it easy to operate and
                      adjust settings according to your preferences.
                    </div>
                  </div>
                </div>

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
                      5. Can I wear Prana Air Personal Air Purifier during physical activities?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, Prana Air Personal Air Purifier is designed to be portable and wearable, making it suitable
                      for use during various physical activities like workouts or outdoor adventures.
                    </div>
                  </div>
                </div>

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
                      6. Is there any need to replace the filters?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Prana Air Personal Air purifier works on the principle of negative ion emitters. It does not
                      constitute any air filters thereby reducing the hassle of filter changes.
                    </div>
                  </div>
                </div>

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
                      7. Can I adjust the purification intensity of the Personal Air Purifier?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, the Personal Air Purifier offers adjustable settings, allowing you to customize the
                      purification intensity based on your preferences and the air quality of your surroundings.
                    </div>
                  </div>
                </div>

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
                      8. Is Prana Air Personal Air Purifier suitable for travel?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The compact and portable design of Prana Air Personal Air Purifier makes it perfect for travel,
                      providing clean and fresh air wherever you go.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overlay */}
      <div id="video-overlay" className="video-overlay"></div>

      {/* Bootstrap Initialization Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Bootstrap components
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Make header sticky on scroll
            window.addEventListener('scroll', function() {
              var header = document.getElementById('new-header');
              if (window.scrollY >= 50) {
                header.classList.add('sticky');
              } else {
                header.classList.remove('sticky');
              }
            });
            
            // Handle nav item active state on scroll
            var sections = document.querySelectorAll('section[id]');
            window.addEventListener('scroll', function() {
              var scrollY = window.scrollY;
              
              sections.forEach(function(section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                  document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active');
                } else {
                  document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active');
                }
              });
            });
          });
        `,
        }}
      />
    </div>
  )
}
