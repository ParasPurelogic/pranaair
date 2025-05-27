import FaqAccordion from "@/Components/Pages/Carfilter/faq-accordion"
import "./style.css"
import Link from "next/link"
import Image from "next/image"
import { getServerTranslation } from "@/i18n/server"

export default async function CarAirFilter() {
  const { t } = await getServerTranslation("car-air-filter")
  // FAQ items data
  const faqItems = [
    {
      question: t("faqSection.items.1.question"),
      answer: t("faqSection.items.1.answer"),
    },
    {
      question: t("faqSection.items.2.question"),
      answer: t("faqSection.items.2.answer"),
    },
    {
      question: t("faqSection.items.3.question"),
      answer: t("faqSection.items.3.answer"),
    },
    {
      question: t("faqSection.items.4.question"),
      answer: t("faqSection.items.4.answer"),
    },
    {
      question: t("faqSection.items.5.question"),
      answer: t("faqSection.items.5.answer"),
    },
    {
      question: t("faqSection.items.6.question"),
      answer: t("faqSection.items.6.answer"),
    },
    {
      question: t("faqSection.items.7.question"),
      answer: t("faqSection.items.7.answer"),
    },
    {
      question: t("faqSection.items.8.question"),
      answer: t("faqSection.items.8.answer"),
    },
    {
      question: t("faqSection.items.9.question"),
      answer: t("faqSection.items.9.answer"),
    },
    {
      question: t("faqSection.items.10.question"),
      answer: t("faqSection.items.10.answer"),
    },
    {
      question: t("faqSection.items.11.question"),
      answer: t("faqSection.items.11.answer"),
    },
  ]
  const pollutionProblems = [
    {
      id: 1,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Figure-nitroge.png",
      iconAlt: t("carAirPollutionSection.problems.higherEmissions.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/High-Nitrogen-Dioxide.jpg",
      imageAlt: t("carAirPollutionSection.problems.higherEmissions.imageAlt"),
      title: t("carAirPollutionSection.problems.higherEmissions.title"),
      description: t("carAirPollutionSection.problems.higherEmissions.description"),
    },
    {
      id: 2,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Figure-lungs.png",
      iconAlt: t("carAirPollutionSection.problems.cardiovascularIssues.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Health-issues.jpg",
      imageAlt: t("carAirPollutionSection.problems.cardiovascularIssues.imageAlt"),
      title: t("carAirPollutionSection.problems.cardiovascularIssues.title"),
      description: t("carAirPollutionSection.problems.cardiovascularIssues.description"),
    },
    {
      id: 3,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Figure-respiratory-icon.png",
      iconAlt: t("carAirPollutionSection.problems.driverFatigue.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/PM2.5-exposure.jpg",
      imageAlt: t("carAirPollutionSection.problems.driverFatigue.imageAlt"),
      title: t("carAirPollutionSection.problems.driverFatigue.title"),
      description: t("carAirPollutionSection.problems.driverFatigue.description"),
    },
    {
      id: 4,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Respiratory-icons.png",
      iconAlt: t("carAirPollutionSection.problems.respiratoryProblems.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Respiratory-Problems.webp",
      imageAlt: t("carAirPollutionSection.problems.respiratoryProblems.imageAlt"),
      title: t("carAirPollutionSection.problems.respiratoryProblems.title"),
      description: t("carAirPollutionSection.problems.respiratoryProblems.description"),
    },
    {
      id: 5,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Unpleasant-Odors-icon.png",
      iconAlt: t("carAirPollutionSection.problems.unpleasantOdors.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Unpleasant-Odors.webp",
      imageAlt: t("carAirPollutionSection.problems.unpleasantOdors.imageAlt"),
      title: t("carAirPollutionSection.problems.unpleasantOdors.title"),
      description: t("carAirPollutionSection.problems.unpleasantOdors.description"),
    },
    {
      id: 6,
      iconSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Bad-Driving-Experience-icon.png",
      iconAlt: t("carAirPollutionSection.problems.badDrivingExperience.iconAlt"),
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Bad-Driving-Experience.webp",
      imageAlt: t("carAirPollutionSection.problems.badDrivingExperience.imageAlt"),
      title: t("carAirPollutionSection.problems.badDrivingExperience.title"),
      description: t("carAirPollutionSection.problems.badDrivingExperience.description"),
    },
  ]
  const filterBenefits = [
    {
      id: 1,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Prevent-Indoor-Air-Pollution.png",
      imageAlt: t("useRightFilterSection.benefits.freshAir.imageAlt"),
      title: t("useRightFilterSection.benefits.freshAir.title"),
      description: t("useRightFilterSection.benefits.freshAir.description"),
    },
    {
      id: 2,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Reduces-Odors.png",
      imageAlt: t("useRightFilterSection.benefits.reducesOdors.imageAlt"),
      title: t("useRightFilterSection.benefits.reducesOdors.title"),
      description: t("useRightFilterSection.benefits.reducesOdors.description"),
    },
    {
      id: 3,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Allergen-Reduction-1.png",
      imageAlt: t("useRightFilterSection.benefits.allergenReduction.imageAlt"),
      title: t("useRightFilterSection.benefits.allergenReduction.title"),
      description: t("useRightFilterSection.benefits.allergenReduction.description"),
    },
    {
      id: 4,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Focus-and-Comfort-1.png",
      imageAlt: t("useRightFilterSection.benefits.focusAndComfort.imageAlt"),
      title: t("useRightFilterSection.benefits.focusAndComfort.title"),
      description: t("useRightFilterSection.benefits.focusAndComfort.description"),
    },
    {
      id: 5,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Fresher-Air.png",
      imageAlt: t("useRightFilterSection.benefits.fresherAir.imageAlt"),
      title: t("useRightFilterSection.benefits.fresherAir.title"),
      description: t("useRightFilterSection.benefits.fresherAir.description"),
    },
    {
      id: 6,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Cleaner-Interior.png",
      imageAlt: t("useRightFilterSection.benefits.cleanerInterior.imageAlt"),
      title: t("useRightFilterSection.benefits.cleanerInterior.title"),
      description: t("useRightFilterSection.benefits.cleanerInterior.description"),
    },
  ]
  const filtrationTechnologies = [
    {
      id: 1,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/car-hepa-filter.png",
      imageAlt: t("filtrationTechSection.technologies.hepa.imageAlt"),
      title: t("filtrationTechSection.technologies.hepa.title"),
      description: t("filtrationTechSection.technologies.hepa.description"),
    },
    {
      id: 2,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/OXYGEN-GENERATION.png",
      imageAlt: t("filtrationTechSection.technologies.oxygenSieves.imageAlt"),
      title: t("filtrationTechSection.technologies.oxygenSieves.title"),
      description: t("filtrationTechSection.technologies.oxygenSieves.description"),
    },
    {
      id: 3,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/FORMALDEHYDE-CATALYST.png",
      imageAlt: t("filtrationTechSection.technologies.formaldehydeCatalyst.imageAlt"),
      title: t("filtrationTechSection.technologies.formaldehydeCatalyst.title"),
      description: t("filtrationTechSection.technologies.formaldehydeCatalyst.description"),
    },
    {
      id: 4,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/NANO-CYSTALLINE-CARBON.png",
      imageAlt: t("filtrationTechSection.technologies.nanoCarbon.imageAlt"),
      title: t("filtrationTechSection.technologies.nanoCarbon.title"),
      description: t("filtrationTechSection.technologies.nanoCarbon.description"),
    },
    {
      id: 5,
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/PHOTO-CATALYSTS-COATING.png",
      imageAlt: t("filtrationTechSection.technologies.photoCatalyst.imageAlt"),
      title: t("filtrationTechSection.technologies.photoCatalyst.title"),
      description: t("filtrationTechSection.technologies.photoCatalyst.description"),
    },
  ]
  const carBrandsWithModels = [
    {
      id: 1,
      name: "marutiSuzuki",
      models: "Ciaz, Brezza, SX4, Swift (2015 to 2017), Ertiga, Dzire 2017, Baleno, Alto",
    },
    {
      id: 2,
      name: "honda",
      models: "City, Amaze, Jazz, WR-V, Civic, Accord",
    },
    {
      id: 3,
      name: "toyota",
      models: "Innova Crysta, Corolla Altis, Fortuner",
    },
    {
      id: 4,
      name: "hyundai",
      models: "i10, i20, Verna, Creta",
    },
    {
      id: 5,
      name: "ford",
      models: "Ford EcoSport, Ford Aspire",
    },
    {
      id: 6,
      name: "skoda",
      models: "Skoda Octavia",
    },
    {
      id: 7,
      name: "volkswagen",
      models: "Polo, Vento",
    },
    {
      id: 8,
      name: "chevrolet",
      models: "Cruze",
    },
    {
      id: 9,
      name: "mahindra",
      models: "Scorpio",
    },
  ]
  const carBrands = [
    {
      id: 1,
      name: "Toyota",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Toyota-car.png",
    },
    {
      id: 2,
      name: "Skoda",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Skoda-car.png",
    },
    {
      id: 3,
      name: "Hyundai",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/hyundai.png",
    },
    {
      id: 4,
      name: "Mercedes-benz",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Mercedes-benz.png",
    },
    {
      id: 5,
      name: "Volkswagen",
      imageSrc: "https://www.pranaair.com/wp-content/uploads/2024/06/Vlokswagen.png",
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
                <h1>{t("heroSection.title")}</h1>
                <h2>{t("heroSection.subtitle")}</h2>
                <p>{t("heroSection.description")}</p>
                <div className="car-filter-price">
                  <span className="woocs_price_code">
                    <span className="woocommerce-Price-amount amount">{t("heroSection.price")}</span>
                  </span>
                </div>
                <Link href="https://www.pranaair.com/product/car-cabin-air-filter/">{t("heroSection.buyNowButton")} </Link>
              </div>
            </div>
            <div className="col-md-6">{/* Hero image would go here */}</div>
          </div>
        </div>
      </section>

      {/* Car Air Pollution Section */}
      <section className="car-air-pollution-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="car-air-heading">
                <h2>{t("carAirPollutionSection.title")}</h2>
              </div>
            </div>
            <div className="col-md-6">{/* Empty column for layout */}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="problem-of-car-solution mob-scroll">
                {pollutionProblems.map((problem) => (
                  <li key={problem.id}>
                    <div className="car-air-pollution-card">
                      <img
                        className="car-air-pollution-icon"
                        src={problem.iconSrc || "/placeholder.svg"}
                        alt={problem.iconAlt}
                      />
                      <img
                        className="high-nitro-di-img"
                        src={problem.imageSrc || "/placeholder.svg"}
                        alt={problem.imageAlt}
                      />
                      <h3>{problem.title}</h3>
                      <p className="cair-air-pollution-para">{problem.description}</p>
                    </div>
                  </li>
                ))}
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
                <h2>{t("usingCarFilterSection.title")}</h2>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row pd">
            <div className="col-md-6 using-bg">
              <div className="using-para">
                <p>{t("usingCarFilterSection.paragraph1")}</p>
                <p>{t("usingCarFilterSection.paragraph2")}</p>
                <p>{t("usingCarFilterSection.paragraph3")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="using-car-air-filter-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Considered-Using-a-Car-Air-Filter.jpg"
                  alt={t("usingCarFilterSection.imageAlt")}
                  width={500}
                  height={300}
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
                <h2>{t("useRightFilterSection.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row car-mob-row">
            <div className="col-md-12">
              <ul className="car-filter">
                {filterBenefits.map((benefit) => (
                  <li key={benefit.id}>
                    <div className="right-filter-box-main">
                      <div className="indor-box">
                        <Image
                          src={benefit.imageSrc || "/placeholder.svg"}
                          alt={benefit.imageAlt}
                          width={80}
                          height={80}
                        />
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
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
                  {t("breatheHealthierSection.titlePart1")} <strong>{t("breatheHealthierSection.healthier")}</strong>{" "}
                  {t("breatheHealthierSection.titlePart2")} <strong>{t("breatheHealthierSection.driveEasier")}</strong>
                </h2>
                <p>{t("breatheHealthierSection.description")}</p>
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
                <h2>{t("filtrationTechSection.title")}</h2>
                <p>{t("filtrationTechSection.subtitle")}</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="filtration-tec-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Filtration-Technology.png"
                  alt={t("filtrationTechSection.mainImageAlt")}
                  width={400}
                  height={600}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="filrtion-tech-point">
                {filtrationTechnologies.map((tech) => (
                  <ul key={tech.id}>
                    <li>
                      <Image src={tech.imageSrc || "/placeholder.svg"} alt={tech.imageAlt} width={80} height={80} />
                    </li>
                    <li>
                      <h3>{tech.title}</h3>
                      <p>{tech.description}</p>
                    </li>
                  </ul>
                ))}
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
                  {t("ultimateProtectionSection.titlePart1")} <strong>{t("ultimateProtectionSection.lovedOnes")}</strong>
                </h2>
                <p>{t("ultimateProtectionSection.description")}</p>
                <Link href="https://www.pranaair.com/product/car-cabin-air-filter/">
                  {t("ultimateProtectionSection.buyNowButton")}
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ultimate-protection-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Unltimate-protection.png"
                  alt={t("ultimateProtectionSection.imageAlt")}
                  width={500}
                  height={400}
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
              <h2>{t("guardsYouFromSection.title")}</h2>
              <p>{t("guardsYouFromSection.description")}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="guard-img">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/06/guard.png"
                alt={t("guardsYouFromSection.imageAlt")}
                width={500}
                height={400}
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
                <h2>{t("enjoyFreshAirSection.title")}</h2>
                <h3>{t("enjoyFreshAirSection.subtitle")}</h3>
                <span className="approx">{t("enjoyFreshAirSection.approximately")}</span>
                <p>{t("enjoyFreshAirSection.description")}</p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="enjoy-fresh-air-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Car-Cabin-filter-page-gif.gif"
                  alt={t("enjoyFreshAirSection.gifAlt")}
                  width={800}
                  height={400}
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
                <h2>{t("howToInstallSection.title")}</h2>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/How-to-install-a-car-cabin-air-filte.jpg"
                  alt={t("howToInstallSection.imageAlt")}
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="how-to-install-filter-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Car-Filter-Installation-Guide.png"
                  alt={t("howToInstallSection.guideImageAlt")}
                  width={800}
                  height={400}
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
                <h2>{t("reasonToChooseSection.title")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6 red-box">
              <div className="reason-to-choose-filter-box">
                <h3>{t("reasonToChooseSection.standardFilter.title")}</h3>
                <p>{t("reasonToChooseSection.standardFilter.description")}</p>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Standard-Filter.png"
                  alt={t("reasonToChooseSection.standardFilter.imageAlt")}
                  width={400}
                  height={300}
                />
                <p className="para-filter">{t("reasonToChooseSection.standardFilter.conclusion")}</p>
              </div>
            </div>
            <div className="col-md-6 green-box">
              <div className="reason-to-choose-filter-box">
                <h3>{t("reasonToChooseSection.pranaFilter.title")}</h3>
                <p>{t("reasonToChooseSection.pranaFilter.description")}</p>
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Prana-Air-Car-Air-Filter-HEPA.png"
                  alt={t("reasonToChooseSection.pranaFilter.imageAlt")}
                  width={400}
                  height={300}
                />
                <p className="para-filter">{t("reasonToChooseSection.pranaFilter.conclusion")}</p>
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
              <h2>{t("comparisonTableSection.standardFilter.title")}</h2>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.standardFilter.filterType.title")}</h3>
              <p>{t("comparisonTableSection.standardFilter.filterType.description")}</p>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.standardFilter.protection.title")}</h3>
              <p>{t("comparisonTableSection.standardFilter.protection.description")}</p>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.standardFilter.efficiency.title")}</h3>
              <p>{t("comparisonTableSection.standardFilter.efficiency.description")}</p>
            </div>
          </div>
          <div className="col-md-6 green-bg">
            <div className="diff-table-heading">
              <h2>{t("comparisonTableSection.pranaFilter.title")}</h2>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.pranaFilter.filterType.title")}</h3>
              <p>{t("comparisonTableSection.pranaFilter.filterType.description")}</p>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.pranaFilter.protection.title")}</h3>
              <p>{t("comparisonTableSection.pranaFilter.protection.description")}</p>
            </div>
            <div className="diff-table-para">
              <h3>{t("comparisonTableSection.pranaFilter.efficiency.title")}</h3>
              <p>{t("comparisonTableSection.pranaFilter.efficiency.description")}</p>
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
                <h2>{t("pranaAirCabinFilterSection.title")}</h2>
                <p>{t("pranaAirCabinFilterSection.description")}</p>
                <ul>
                  <li>{t("pranaAirCabinFilterSection.carA")}</li>
                  <li>{t("pranaAirCabinFilterSection.carB")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="graph-img">
                <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/06/Prana-Air-Cabin-Filter-graph.jpg"
                  alt={t("pranaAirCabinFilterSection.graphAlt")}
                  width={800}
                  height={400}
                />
              </div>
              <div className="filter-graph-para">
                <p>{t("pranaAirCabinFilterSection.graphDescription")}</p>
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
                <h2>{t("availableForSection.title")}</h2>
                <p>{t("availableForSection.description")}</p>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="brand-logo">
                {carBrands.map((brand) => (
                  <li key={brand.id}>
                    <Image
                      src={brand.imageSrc || "/placeholder.svg"}
                      alt={t(`availableForSection.brands.${brand.name.toLowerCase()}`)}
                      width={100}
                      height={50}
                    />
                  </li>
                ))}
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
                <h2>{t("selectCarBrandSection.title")}</h2>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="all-brands-list">
                {carBrandsWithModels.map((brand) => (
                  <ul key={brand.id}>
                    <li>
                      <h3>{t(`selectCarBrandSection.brands.${brand.name}.name`)}</h3>
                    </li>
                    <li>{t(`selectCarBrandSection.brands.${brand.name}.models`)}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="brand-btn">
                <Link className="buy-btn" href="https://www.pranaair.com/product/car-cabin-air-filter/">
                  {t("selectCarBrandSection.buttons.buyNow")}
                </Link>
                <a
                  className="amazon-btn"
                  href="https://www.amazon.in/stores/page/195BC2CC-2B06-4801-895E-55E27CA6330F"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("selectCarBrandSection.buttons.amazon")}
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
              <h2>{t("faqSection.title")}</h2>
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
