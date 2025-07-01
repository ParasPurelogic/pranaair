import Image from "next/image"
import "./style.css"
import ContactForm from "@/Components/Contacform/ContactForm"
import OfficeApplicationsCarousel from "@/Components/Pages/Office/app-slider"
import IndustrialApplicationsCarousel from "@/Components/Pages/Airports/industrial-applications-carousel"
import { getServerTranslation } from "@/i18n/server"
import Link from "@/Components/TranslateLink"
import { domain, supportedLanguages } from "@/config"

export async function generateMetadata({ params }) {
  const lang = params?.lang || "en";
  const slug = "air-quality-monitor"; // page-specific slug
  const { t } = await getServerTranslation("office");
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

export default async function OfficeSolutions() {
  const { t } = await getServerTranslation("office")

  const officeProducts = [
    {
      title: "Sensible+ Monitor",
      description: "This smart air quality monitor features a 7-inch touchscreen display that provides detailed data insights for washroom or bathroom",
      features: [
        "7 Inch LED Touch Screen Display",
        "5000 mAh Battery InBuilt",
        "WiFi Connectivity With Mobile App"
      ],
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2023/07/sensible-plus-air-quality-monitor-scaled.jpg",
      imageAlt: "Prana air sensible+ air quality monitor for office",
      knowMoreLink: "/air-quality-monitor/sensible-air-monitor",
      hasRentOption: false
    },
    {
      title: "SQUAIR Air Monitor",
      description: "This is a smart indoor air quality monitoring device that can detect the odor, humidity, and other toxic gas parameters.",
      features: [
        "Detects TVOCs (odor), temperature, and humidity as well",
        "Mobile & Smart TV App Enabled",
        "Reliable Web Dashboard Accessibility"
      ],
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2023/07/squair-air-quality-monitor-scaled.jpg",
      imageAlt: "Prana air squair air quality monitor for offices",
      knowMoreLink: "/air-quality-monitor/squair-air-monitor",
      hasRentOption: true
    }
  ]
  const industrialApplications = [
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-hotel.jpg",
      title: t("industrialApplicationsData.hotel.title"),
      link: "/solutions-by-application/hotel-businesses/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-restaurant.jpg",
      title: t("industrialApplicationsData.restaurant.title"),
      link: "/solutions-by-application/restaurants/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-institute.jpg",
      title: t("industrialApplicationsData.institutes.title"),
      link: "/solutions-by-application/institutes/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/09/clean-air-solutions-for-cinema.jpg",
      title: t("industrialApplicationsData.cinema.title"),
      link: "/solutions-by-application/cinema-and-theatre/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-autombile.jpg",
      title: t("industrialApplicationsData.automobiles.title"),
      link: "/solutions-by-application/automobile/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-real-estate.jpg",
      title: t("industrialApplicationsData.realEstate.title"),
      link: "/solutions-by-application/real-estate/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/solutions-for-mobile-phone-makers.png",
      title: t("industrialApplicationsData.smartphone.title"),
      link: "/solutions-by-application/smartphone-makers/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2022/08/air-quality-construction-sites.jpg",
      title: t("industrialApplicationsData.construction.title"),
      link: "/solutions-by-industry/pm2-5-monitoring-air-pollution-by-construction-sites/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-animale-care-page.jpg",
      title: t("industrialApplicationsData.animalCare.title"),
      link: "/solutions-by-application/animal-care-center/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-logistics-page.jpg",
      title: t("industrialApplicationsData.logistics.title"),
      link: "/solutions-by-application/logistics/",
    },
    {
      image: "https://www.pranaair.com/wp-content/uploads/2024/08/solutions-for-railway-page.jpg",
      title: t("industrialApplicationsData.railways.title"),
      link: "/solutions-by-application/railway/",
    }
  ]
  return (
    <main>
      {/* Banner Section */}
      <section className="school_banner_box">
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner_quality_box">
              <div className="pocket_title_box school_aqi_box">
                <h1>
                  {t("officeBanner.title")}
                  <span className="bold_text"> {t("officeBanner.highlight")} </span>
                </h1>
                <p>{t("officeBanner.description")}</p>
                <p className="banner-high-co2">{t("officeBanner.tagline")}</p>
                <a className="banner-btn" href="#get_in_touch">
                  {t("officeBanner.cta")}
                </a>
              </div>
            </div>
            <div className="col-md-6 banner_quality_img_box"></div>
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section>
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              <span style={{ fontSize: "24pt" }}>
                {t("officeFactors.title")} <span style={{ color: "#78ae60" }}>{t("officeFactors.highlight")}</span>
              </span>
            </h2>
            <p>{t("officeFactors.description")}</p>
          </div>
        </div>
      </section>

      {/* Factors Grid */}
      <section className="pollution_cntr-inner-factors">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/pm-icon.png"
                  alt="PM icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.pm.title")}</h2>
                  <p>{t("officeFactors.pm.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-icon.png"
                  alt="CO2 level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.co2.title")}</h2>
                  <p>{t("officeFactors.co2.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs-icon.png"
                  alt="VOCs icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.vocs.title")}</h2>
                  <p>{t("officeFactors.vocs.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/hcho-icon.png"
                  alt="HCHO icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.hcho.title")}</h2>
                  <p>{t("officeFactors.hcho.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pollution_cntr-inner-factors">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/ozone-icon.png"
                  alt="Ozone icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.ozone.title")}</h2>
                  <p>{t("officeFactors.ozone.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/humidity-icon.png"
                  alt="Humidity level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.humidity.title")}</h2>
                  <p>{t("officeFactors.humidity.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/temperature-icon.png"
                  alt="Temperature level in offices"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.temperature.title")}</h2>
                  <p>{t("officeFactors.temperature.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature_box factors-affect-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/noise-icon.png"
                  alt="Noise icon"
                  width={102}
                  height={99}
                />
                <div className="feature_wrap_box">
                  <h2>{t("officeFactors.noise.title")}</h2>
                  <p>{t("officeFactors.noise.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Effects Section */}
      <section className="school_img_box">
        <div className="container">
          <div className="school_box_cntr">
            <ul>
              <li className="first_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/pm.png"
                    alt="PM odor icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.pm.title")}</h3>
                  <p>{t("officeHealthEffects.pm.description")}</p>
                </div>
              </li>
              <li className="second_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/vocs.png"
                    alt="VOCs icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.vocs.title")}</h3>
                  <p>{t("officeHealthEffects.vocs.description")}</p>
                </div>
              </li>
              <li className="third_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/co2-1.png"
                    alt="CO2 icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.co2.title")}</h3>
                  <p>{t("officeHealthEffects.co2.description")}</p>
                </div>
              </li>
              <li className="six_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/temp.png"
                    alt="Temperature in washroom"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.temperature.title")}</h3>
                  <p>{t("officeHealthEffects.temperature.description")}</p>
                </div>
              </li>
              <li className="fivth_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/o3-icon.png"
                    alt="O3 icon"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.ozone.title")}</h3>
                  <p>{t("officeHealthEffects.ozone.description")}</p>
                </div>
              </li>
              <li className="sixth_school_box">
                <span className="school_icon_box">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/noise.png"
                    alt="Noise"
                    width={60}
                    height={60}
                  />
                </span>
                <div className="schhol_text_box">
                  <h3>{t("officeHealthEffects.noise.title")}</h3>
                  <p>{t("officeHealthEffects.noise.description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="pollution_cntr-inner-heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2>
              {t("officeHealthImpacts.title")}{" "}
              <span style={{ color: "#78ae60" }}>{t("officeHealthImpacts.highlight")}</span>
            </h2>
            <h3 className="heading-box">{t("officeHealthImpacts.shortTerm.title")}</h3>
          </div>
        </div>
      </section>

      {/* Short-Term Health Effects */}
      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/eyes-and-respiration-irritation.png"
                  alt="Eyes and respiration irritation due to air quality"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.shortTerm.irritation.title")}</h3>
                  <p>{t("officeHealthImpacts.shortTerm.irritation.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 sprt-mrgn">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Respiratory-problems.png"
                  alt="Respiratory problems"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.shortTerm.respiratory.title")}</h3>
                  <p>{t("officeHealthImpacts.shortTerm.respiratory.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Cardiovascular-problems.png"
                  alt="Cardiovascular problems"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.shortTerm.cardiovascular.title")}</h3>
                  <p>{t("officeHealthImpacts.shortTerm.cardiovascular.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 sprt-last-mrgn">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/headache-and-high-bp.png"
                  alt="Headache and high BP due to air quality"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.shortTerm.headaches.title")}</h3>
                  <p>{t("officeHealthImpacts.shortTerm.headaches.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Health Effects */}
      <section className="pollution_heading">
        <div className="container">
          <h3 className="heading-box long-term-heading">{t("officeHealthImpacts.longTerm.title")}</h3>
        </div>
      </section>

      <section className="pollution_cntr inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/Chronic-respiratory-diseases.png"
                  alt="Chronic respiratory diseases"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.longTerm.respiratory.title")}</h3>
                  <p>{t("officeHealthImpacts.longTerm.respiratory.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="health-impact">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/health-problems-due-to-air-pollution.png"
                  alt="Health problems due to air pollution"
                  width={142}
                  height={112}
                />
                <div className="feature_wrap_box">
                  <h3>{t("officeHealthImpacts.longTerm.other.title")}</h3>
                  <p>{t("officeHealthImpacts.longTerm.other.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-content">
              <h2>{t("quote.title")}</h2>
              <p>{t("quote.content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources of Air Pollution */}
      <section>
        <div className="container">
          <div className="source-of-air-pollution-heading">
            <h2>
              {t("officePollutionSources.title")}{" "}
              <span style={{ color: "#78ae60" }}>{t("officePollutionSources.highlight")}</span>
            </h2>
            <p>{t("officePollutionSources.description")}</p>
          </div>

          <div className="pollution-sources-slider">
            <div className="row">
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-office-equipments.jpg"
                    alt="Air pollutants from office equipments"
                    width={325}
                    height={200}
                  />
                  <h3>{t("officePollutionSources.equipment.title")}</h3>
                  <p>{t("officePollutionSources.equipment.description")}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-cleaning-products.jpg"
                    alt="Air pollutants from cleaning products"
                    width={325}
                    height={200}
                  />
                  <h3>{t("officePollutionSources.cleaning.title")}</h3>
                  <p>{t("officePollutionSources.cleaning.description")}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/air-pollutants-from-dusting.jpg"
                    alt="Air pollutants from dusting"
                    width={325}
                    height={200}
                  />
                  <h3>{t("officePollutionSources.dusting.title")}</h3>
                  <p>{t("officePollutionSources.dusting.description")}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="source-air-pollution-slider-txt">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/07/high-co2-due-to-higher-occupancy.jpg"
                    alt="High CO2 due to higher occupancy"
                    width={325}
                    height={200}
                  />
                  <h3>{t("officePollutionSources.occupancy.title")}</h3>
                  <p>{t("officePollutionSources.occupancy.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions */}
      <section className="quality-solutions-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              {t("officeSolutions.title")} <span className="highlight">{t("officeSolutions.highlight")}</span>
            </h2>
            <p>{t("officeSolutions.description")}</p>
          </div>

          <div className="solutions-tabs-container">
            {/* Bootstrap Tabs */}
            <ul className="nav nav-tabs" id="solutionsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="monitors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#monitors"
                  type="button"
                  role="tab"
                  aria-controls="monitors"
                  aria-selected="true"
                >
                  {t("officeSolutions.tabs.monitors")}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="fresh-air-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fresh-air"
                  type="button"
                  role="tab"
                  aria-controls="fresh-air"
                  aria-selected="false"
                >
                  {t("officeSolutions.tabs.freshAir")}
                </button>
              </li>
            </ul>

            <div className="tab-content" id="solutionsTabsContent">
              <div className="tab-pane fade show active" id="monitors" role="tabpanel" aria-labelledby="monitors-tab">
                <OfficeApplicationsCarousel officeProducts={officeProducts} />
              </div>

              <div className="tab-pane fade" id="fresh-air" role="tabpanel" aria-labelledby="fresh-air-tab">
                <div className="product-slide">
                  <div className="product-content fresh-air-content">
                    <div className="product-image">
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2023/07/for-fresh-air-machine-scaled.jpg"
                        alt="For fresh air machine"
                        width={500}
                        height={400}
                        objectFit="contain"
                      />
                    </div>
                    <div className="product-info">
                      <h3>{t("officeSolutions.freshAir.title")}</h3>
                      <p>{t("officeSolutions.freshAir.description")}</p>
                      <ul className="feature-list">
                        <li>{t("officeSolutions.freshAir.features.feature1")}</li>
                        <li>{t("officeSolutions.freshAir.features.feature2")}</li>
                        <li>{t("officeSolutions.freshAir.features.feature3")}</li>
                      </ul>
                      <Link className="know-more-btn" href={`${domain}/fresh-air-machine`}>
                        {t("officeSolutions.freshAir.cta")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              {t("officeComparison.title")} <span className="highlight">{t("officeComparison.highlight")}</span>
            </h2>
            <p>{t("officeComparison.description")}</p>
          </div>

          <div className="comparison-container">
            <div className="comparison-columns">
              <div className="comparison-column without-solution">
                <h3>{t("officeComparison.without.title")}</h3>
                <ul className="comparison-list negative-list">
                  <li>{t("officeComparison.without.points.point1")}</li>
                  <li>{t("officeComparison.without.points.point2")}</li>
                  <li>{t("officeComparison.without.points.point3")}</li>
                </ul>
                <div className="comparison-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/without-fresh-air-solution-in-washroom.jpg"
                    alt="Without fresh air solution in washroom"
                    width={350}
                    height={186}
                  />
                </div>
              </div>

              <div className="comparison-divider"></div>

              <div className="comparison-column with-solution">
                <h3>{t("officeComparison.with.title")}</h3>
                <ul className="comparison-list positive-list">
                  <li>{t("officeComparison.with.points.point1")}</li>
                  <li>{t("officeComparison.with.points.point2")}</li>
                  <li>{t("officeComparison.with.points.point3")}</li>
                </ul>
                <div className="comparison-image">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2023/04/with-fresh-air-solution-in-washroom.jpg"
                    alt="With fresh air solution in washroom"
                    width={350}
                    height={185}
                  />
                </div>
              </div>
            </div>

            <div className="comparison-studies">
              <p>{t("officeComparison.studies.study1")}</p>
              <p>{t("officeComparison.studies.study2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Freemium Services */}
      <section className="top_space_heading">
        <div className="container">
          <div className="introducing_box sub_title_box text-center">
            <h2 className="title_heading">
              {t("officeDataServices.title")} <span className="bold_text">{t("officeDataServices.highlight")}</span>
            </h2>
            <p>{t("officeDataServices.description")}</p>
          </div>
        </div>
      </section>

      <section className="inner_container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-tv-app-data-in-office.jpg"
                  alt="AQI TV app data in office"
                  width={350}
                  height={200}
                />
                <h3>{t("officeDataServices.tvApp")}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-web-or-table-app-for-office.jpg"
                  alt="AQI web or table app for office"
                  width={350}
                  height={200}
                />
                <h3>{t("officeDataServices.webDashboards")}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="app_service_box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2023/07/aqi-app-to-check-office-air-quality.jpg"
                  alt="AQI app to check office air quality"
                  width={350}
                  height={200}
                />
                <h3>{t("officeDataServices.mobileApp")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="clientele-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              {t("clientele.title")} <span className="highlight">{t("clientele.highlight")}</span>
            </h2>
            <p>{t("clientele.description")}</p>
          </div>

          <div className="client-grid">
            <div className="client-row">
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MORGAN-STANLEY.png"
                  alt="Morgan Stanley"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/OLA.png"
                  alt="Ola"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MICROSOFT.png"
                  alt="Microsoft"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/IIT-BHU.png"
                  alt="IIT"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="client-row">
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/RENAULT-NISSAN.png"
                  alt="Renault Nissan"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/TATA.png"
                  alt="Tata"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/CSIR.png"
                  alt="CSIR"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
              <div className="client-logo-box">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2022/08/MAHINDRA.png"
                  alt="Mahindra"
                  width={200}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get_in_touch" className="contact-section-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-heading">
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.description")}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm pageName="Office Page" />
      </section>

      {/* FAQ Section - Bootstrap Accordion */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              {t("faq.title")} <span className="highlight">{t("faq.highlight")}</span>
            </h2>
            <p>{t("officeFaq.description")}</p>
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
                  {t("officeFaq.questions.q1")}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("officeFaq.answers.a1")}</p>
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
                  {t("officeFaq.questions.q2")}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("officeFaq.answers.a2")}</p>
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
                  {t("officeFaq.questions.q3")}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("officeFaq.answers.a3")}</p>
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
                  {t("officeFaq.questions.q4")}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("officeFaq.answers.a4")}</p>
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
                  {t("officeFaq.questions.q5")}
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>{t("officeFaq.answers.a5")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="industrial-applications-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              {t("industrial.title")} <span className="highlight">{t("industrial.highlight")}</span>
            </h2>
            <p>{t("industrial.description")}</p>
          </div>

          <div className="applications-carousel">
            <IndustrialApplicationsCarousel applications={industrialApplications} />
          </div>
        </div>
      </section>

      {/* Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Load Bootstrap JS
              const script = document.createElement('script');
              script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
              script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
              script.crossOrigin = 'anonymous';
              document.body.appendChild(script);
            });
          `,
        }}
      />
    </main>
  )
}
