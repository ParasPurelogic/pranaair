"use client"

import Link from "next/link"
import Image from "next/image"

// Mock translations
const useTranslations = () => {
  return {
    t: (key) => {
      const translations = {
        "footer.columns.quickLinks": "Quick Links",
        "footer.columns.ourProducts": "Our Products",
        "footer.columns.otherLinks": "Other Links",
        "footer.contactDetails": "Contact Details",
        "footer.email": "Email",
        "footer.phone": "Phone",
        "footer.regions.india": "India",
        "footer.regions.us": "US",
        "footer.offices.indiaOffice": "India Office",
        "footer.offices.usOffice": "US Office",
        "footer.yourOrder": "Your Order",
        "footer.tracking": "Tracking",
        "footer.findUsOn": "Find us on",
        "footer.copyright": "Prana Air. All rights reserved.",
        "footer.links.home": "Home",
        "footer.links.about": "About Us",
        "footer.links.contact": "Contact Us",
        "footer.links.blog": "Blog",
        "footer.links.faqs": "FAQs",
        "footer.links.shop": "Shop",
        "footer.links.airQualityMonitors": "Air Quality Monitors",
        "footer.links.airQualitySensors": "Air Quality Sensors",
        "footer.links.airQualityDrone": "Air Quality Drone",
        "footer.links.airQualityPCBs": "Air Quality PCBs",
        "footer.links.weatherStation": "Weather Station",
        "footer.links.freshAirMachine": "Fresh Air Machine",
        "footer.links.airQualitySolutions": "Air Quality Solutions",
        "footer.links.productManuals": "Product Manuals",
        "footer.links.dataAccuracy": "Data Accuracy",
        "footer.links.caseStudy": "Case Study",
        "footer.links.refundPolicy": "Refund Policy",
        "footer.links.privacyPolicy": "Privacy Policy",
      }
      return translations[key] || key
    },
    locale: "en",
    getLocalizedPath: (path) => path,
  }
}

function MainFooter() {
  const { t, locale, getLocalizedPath } = useTranslations()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Desktop Layout */}
        <div className="footer-grid d-none d-md-grid">
          {/* Logo and Description */}
          <div className="footer-logo-section">
            <Link href="/" className="footer-logo">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
                alt="Prana Air"
                width={150}
                height={50}
                style={{ marginBottom: "16px" }}
              />
            </Link>
            <p className="footer-description">
              Prana Air is a product brand of Purelogic Labs India to provide the best air quality monitoring and
              solutions for indoor & outdoor globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h5 className="footer-heading">{t("footer.columns.quickLinks")}</h5>
            <ul className="footer-links">
              {[
                { key: "home", path: "/" },
                { key: "about", path: "/about-us" },
                { key: "contact", path: "/contact-us" },
                { key: "blog", path: "https://www.pranaair.com/blog/" },
                { key: "faqs", path: "https://www.pranaair.com/faq/" },
                { key: "shop", path: "https://www.pranaair.com/shop/" },
              ].map((link) => (
                <li key={link.key} className="footer-link-item">
                  <Link href={getLocalizedPath(link.path)} className="footer-link">
                    {t(`footer.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-links-section">
            <h5 className="footer-heading">{t("footer.columns.ourProducts")}</h5>
            <ul className="footer-links">
              {[
                { key: "airQualityMonitors", path: "/air-quality-monitor/" },
                { key: "airQualitySensors", path: "/air-quality-sensor" },
                { key: "airQualityDrone", path: "/air-quality-monitor/air-drone/" },
                { key: "airQualityPCBs", path: "/air-quality-pcb-board/" },
                { key: "weatherStation", path: "/air-quality-monitor/weather-station/" },
                { key: "freshAirMachine", path: "/fresh-air-machine/" },
              ].map((product) => (
                <li key={product.key} className="footer-link-item">
                  <Link href={getLocalizedPath(product.path)} className="footer-link">
                    {t(`footer.links.${product.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Other Links */}
          <div className="footer-links-section">
            <h5 className="footer-heading">{t("footer.columns.otherLinks")}</h5>
            <ul className="footer-links">
              {[
                { key: "airQualitySolutions", path: "https://www.pranaair.com/solutions-by-application/" },
                { key: "productManuals", path: "https://www.pranaair.com/documents/" },
                { key: "dataAccuracy", path: "https://www.pranaair.com/air-quality-data-accuracy/" },
                { key: "caseStudy", path: "https://www.pranaair.com/blog/category/case-study/" },
                { key: "refundPolicy", path: "https://www.pranaair.com/return-refund-policy/" },
                { key: "privacyPolicy", path: "https://www.pranaair.com/privacy/" },
              ].map((link) => (
                <li key={link.key} className="footer-link-item">
                  <Link href={getLocalizedPath(link.path)} className="footer-link">
                    {t(`footer.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-section">
            <div className="contact-card">
              <h5 className="footer-heading" style={{ marginBottom: "24px" }}>
                {t("footer.contactDetails")}
              </h5>
              <div style={{ display: "flex", flexDirection: "column"}}>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#7ab261" }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <p className="contact-label">{t("footer.email")}:</p>
                    <a href="mailto:info@purelogic.in" className="contact-email">
                      info@purelogic.in
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#7ab261" }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <p className="contact-label">{t("footer.phone")}:</p>
                    <p className="contact-value" style={{ marginBottom: "4px" }}>
                      +91 7391873918 ({t("footer.regions.india")})
                    </p>
                    <p className="contact-value">+1 612 2992 211 ({t("footer.regions.us")})</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#7ab261" }}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <div style={{ marginBottom: "16px" }}>
                      <p className="contact-label">{t("footer.offices.indiaOffice")}:</p>
                      <p className="contact-value">
                        Crown Heights, 7th Floor, 706, Rohini Sec-10, New Delhi-110085, India
                      </p>
                    </div>
                    <div>
                      <p className="contact-label">{t("footer.offices.usOffice")}:</p>
                      <p className="contact-value">1240 S 2nd St, #933, Minneapolis, MN 55415, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="d-md-none" style={{ marginBottom: "32px" }}>
          {/* Logo and Description */}
          <div style={{ textAlign: "center" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
                alt="Prana Air"
                width={120}
                height={40}
                style={{ margin: "0 auto" }}
              />
            </Link>
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.5", padding: "0 16px" }}>
              Prana Air is a product brand of Purelogic Labs India to provide the best air quality monitoring and
              solutions for indoor & outdoor globally.
            </p>
          </div>
        </div>

        {/* Order Tracking - Both Mobile and Desktop */}
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <div className="footer-order-tracking">
              <span className="order-label">{t("footer.yourOrder")}</span>
              <Link href={getLocalizedPath("/tracking")} className="tracking-button">
                {t("footer.tracking")}
              </Link>
            </div>

            <div className="footer-social-bottom">
              <span className="social-label">{t("footer.findUsOn")}:</span>
              <div className="social-icons">
                {[
                  { icon: "facebook", href: "https://www.facebook.com/airprana" },
                  { icon: "youtube", href: "https://www.youtube.com/c/PranaAir" },
                  { icon: "linkedin", href: "https://www.linkedin.com/company/pranaair/" },
                  { icon: "instagram", href: "https://www.instagram.com/prana.air/" },
                ].map((social, index) => (
                  <Link key={index} href={social.href} style={{ color: "#9ca3af", transition: "color 0.2s" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {social.icon === "facebook" && (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      )}
                      {social.icon === "youtube" && (
                        <>
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </>
                      )}
                      {social.icon === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </>
                      )}
                      {social.icon === "instagram" && (
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </>
                      )}
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  )
}

export default MainFooter

