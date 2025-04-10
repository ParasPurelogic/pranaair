"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MegaMenu } from "./MegaMenu"

// Mock cart context
const useCart = () => {
  return { itemCount: 0 }
}

// Mock translations
const useTranslations = () => {
  return {
    locale: "en",
    setLocale: () => {},
    availableLocales: [{ code: "en", name: "English (UK)" }],
    getLocalizedPath: (path) => path,
  }
}

// Navigation data
const mainNavItems = [
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies", hasDropdown: true },
  { label: "Know What", href: "/know-what", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: true },
]

function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubcategory, setActiveSubcategory] = useState(null)
  const [activeMobileMenu, setActiveMobileMenu] = useState(null)
  const { itemCount } = useCart()
  const pathname = usePathname()
  const megaMenuRef = useRef(null)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const languageDropdownRef = useRef(null)
  const { locale, setLocale, availableLocales, getLocalizedPath } = useTranslations()

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMobileMenu(null)
      }

      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null)
      setActiveSubcategory(null)
    } else {
      setActiveCategory(category)
      setActiveSubcategory(null)
    }
  }

  const handleSubcategoryClick = (subcategory) => {
    if (activeSubcategory === subcategory) {
      setActiveSubcategory(null)
    } else {
      setActiveSubcategory(subcategory)
    }
  }

  // Sample product data for the handheld category
  const handheldProducts = [
    {
      name: "Pocket PM2.5",
      image: "https://www.pranaair.com/wp-content/uploads/2024/01/pocket-pm25.jpg",
      slug: "pocket-monitor",
      url: "/air-quality-monitor/handheld/pocket-monitor",
    },
    {
      name: "Nano CO",
      image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-co.jpg",
      slug: "nano-co-monitor",
      url: "/air-quality-monitor/handheld/nano-co-monitor",
    },
    {
      name: "Nano CO2",
      image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-co2.jpg",
      slug: "nano-co2-monitor",
      url: "/air-quality-monitor/handheld/nano-co2-monitor",
    },
    {
      name: "Nano TVOC",
      image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-tvoc.jpg",
      slug: "nano-tvoc-monitor",
      url: "/air-quality-monitor/handheld/nano-tvoc-monitor",
    },
  ]

  return (
    <>
      <header className="header-container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo-container">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
              alt="Prana Air"
              width={140}
              height={46}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="nav-container">
            <ul className="nav-list">
              {mainNavItems.map((item) => (
                <li key={item.label} className="nav-item">
                  {item.hasDropdown ? (
                    <>
                      <Link href={item.href} className="nav-link">
                        {item.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </Link>
                      {item.label === "Products" && (
                        <div className="mega-menu-container">
                          <MegaMenu onClose={() => {}} />
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Menu */}
          <div className="right-menu">
            <Link href="/contact" className="get-in-touch">
              Get in touch
            </Link>

            <div
              className="position-relative"
              ref={languageDropdownRef}
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              onMouseLeave={() => setIsLanguageDropdownOpen(false)}
            >
              <button className="language-selector">
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
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>English (UK)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isLanguageDropdownOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div
                  className="position-absolute"
                  style={{
                    right: 0,
                    marginTop: "8px",
                    width: "192px",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    zIndex: 50,
                  }}
                >
                  <div style={{ padding: "4px 0" }}>
                    <Link
                      href={pathname}
                      className="d-block w-100 text-start px-4 py-2"
                      style={{
                        fontSize: "14px",
                        backgroundColor: "#f3f4f6",
                        color: "#7ab261",
                      }}
                      onClick={() => {
                        setLocale("en")
                        setIsLanguageDropdownOpen(false)
                      }}
                    >
                      English (UK)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/login" className="login-link">
              Login
            </Link>

            <Link href="/cart" className="cart-link">
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
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link href="/" className="logo-container">
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
                alt="Prana Air"
                width={140}
                height={46}
                priority
              />
            </Link>
            <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="mobile-nav-list">
            {/* Solutions */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeCategory === "solutions" ? "active" : ""}`}
                onClick={() => handleCategoryClick("solutions")}
              >
                Solutions
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
                  style={{
                    transform: activeCategory === "solutions" ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Products */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeCategory === "products" ? "active" : ""}`}
                onClick={() => handleCategoryClick("products")}
              >
                Products
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
                  style={{
                    transform: activeCategory === "products" ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {activeCategory === "products" && (
                <div className="mobile-category-menu">
                  {/* Air Quality Monitors */}
                  <button
                    className={`mobile-category-button ${activeSubcategory === "monitors" ? "active" : ""}`}
                    onClick={() => handleSubcategoryClick("monitors")}
                  >
                    <img src="/icons/monitor.svg" alt="" width={24} height={24} />
                    Air Quality Monitors
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
                      style={{
                        marginLeft: "auto",
                        transform: activeSubcategory === "monitors" ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {activeSubcategory === "monitors" && (
                    <>
                      {/* Handheld Category */}
                      <button className="mobile-subcategory-button" onClick={() => handleSubcategoryClick("handheld")}>
                        <img src="/icons/handheld.svg" alt="" width={24} height={24} />
                        Handheld
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
                          style={{ marginLeft: "auto" }}
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>

                      {/* Product Grid */}
                      <div className="mobile-product-grid">
                        {handheldProducts.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.url}
                            className="mobile-product-card"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="mobile-product-image">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={150}
                                height={150}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                              />
                            </div>
                            <div className="mobile-product-name">{product.name}</div>
                          </Link>
                        ))}
                      </div>

                      {/* View All Link */}
                      <Link
                        href="/air-quality-monitor/handheld"
                        className="view-all-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All Handheld Monitors
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
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Case Studies */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeCategory === "case-studies" ? "active" : ""}`}
                onClick={() => handleCategoryClick("case-studies")}
              >
                Case Studies
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
                  style={{
                    transform: activeCategory === "case-studies" ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Know What */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeCategory === "know-what" ? "active" : ""}`}
                onClick={() => handleCategoryClick("know-what")}
              >
                Know What
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
                  style={{
                    transform: activeCategory === "know-what" ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* About */}
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeCategory === "about" ? "active" : ""}`}
                onClick={() => handleCategoryClick("about")}
              >
                About
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
                  style={{
                    transform: activeCategory === "about" ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div style={{ padding: "16px", marginTop: "16px" }}>
            <Link
              href="/contact"
              style={{
                display: "block",
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#7ab261",
                color: "white",
                textAlign: "center",
                borderRadius: "6px",
                fontWeight: "500",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default MainHeader

