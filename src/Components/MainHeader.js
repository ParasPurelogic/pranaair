"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { MegaMenu, SolutionsMegaMenu, KnowWhatMegaMenu, AboutUsMegaMenu, CaseStudiesMegaMenu } from "./MegaMenu"
import { useTranslation } from "react-i18next"
import { fetchLocalizedPosts, fetchLocalizedCaseStudies } from "../utils/wordpress-api"

// Mock cart context
const useCart = () => {
  return { itemCount: 0 }
}

// Import the real product categories from mega menu
import { getProductCategories, getSolutionsCategories, getKnowWhatArticles } from "./MegaMenu"

function MainHeader() {
  const { t, i18n } = useTranslation("header-menu")
  const productCategories = getProductCategories(t)
  const solutionsCategories = getSolutionsCategories(t)
  const knowWhatArticles = getKnowWhatArticles(t)
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubcategory, setActiveSubcategory] = useState(null)
  const [activeMobileMenu, setActiveMobileMenu] = useState(null)
  const { itemCount } = useCart()
  const megaMenuRef = useRef(null)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [mobileBlogs, setMobileBlogs] = useState([])
  const [mobileCaseStudies, setMobileCaseStudies] = useState([])
  const [mobileBlogsLoading, setMobileBlogsLoading] = useState(false)
  const [mobileCaseStudiesLoading, setMobileCaseStudiesLoading] = useState(false)

  const languageDropdownRef = useRef(null)

  // Available languages - Ready for expansion
  const availableLanguages = [
    { code: "", name: "English (UK)", flag: "🇬🇧", nativeName: "English" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳", nativeName: "हिंदी" },
    // Ready to add more languages:
    // { code: "es", name: "Español", flag: "🇪🇸", nativeName: "Español" },
    // { code: "fr", name: "Français", flag: "🇫🇷", nativeName: "Français" },
    // { code: "de", name: "Deutsch", flag: "🇩🇪", nativeName: "Deutsch" },
    // { code: "zh", name: "中文", flag: "🇨🇳", nativeName: "中文" },
    // { code: "ja", name: "日本語", flag: "🇯🇵", nativeName: "日本語" },
    // { code: "ar", name: "العربية", flag: "🇸🇦", nativeName: "العربية" },
  ]

  // Navigation data with translation keys
  const mainNavItems = [
    { label: t("nav.solutions"), href: "/solutions", hasDropdown: true, key: "solutions" },
    { label: t("nav.products"), href: "/products", hasDropdown: true, key: "products" },
    { label: t("nav.caseStudies"), href: "/case-studies", hasDropdown: true, key: "case-studies" },
    { label: t("nav.knowWhat"), href: "/know-what", hasDropdown: true, key: "know-what" },
    { label: t("nav.about"), href: "/about", hasDropdown: true, key: "about" },
  ]

  // Change language function with URL update
  const changeLanguage = (lng) => {
    // Update i18next language
    i18n.changeLanguage(lng)

    // Check if current path has a locale prefix
    const hasLocalePrefix = availableLanguages.some(
      (lang) => lang.code && (pathname.startsWith(`/${lang.code}/`) || pathname === `/${lang.code}`),
    )

    let newPath = pathname

    // If currently on a localized path, remove the locale prefix
    if (hasLocalePrefix) {
      availableLanguages.forEach((lang) => {
        if (lang.code && pathname.startsWith(`/${lang.code}/`)) {
          newPath = pathname.substring(lang.code.length + 1)
        } else if (lang.code && pathname === `/${lang.code}`) {
          newPath = "/"
        }
      })
    }

    // If switching to English (empty code), go to global URL
    if (lng === "") {
      if (newPath === "/") {
        router.push("/")
      } else {
        router.push(newPath)
      }
    } else {
      // For other languages, add the locale prefix
      if (newPath === "/") {
        router.push(`/${lng}`)
      } else {
        router.push(`/${lng}${newPath}`)
      }
    }

    setIsLanguageDropdownOpen(false)
  }

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

  const handleMobileNavClick = (key) => {
    if (activeMobileMenu === key) {
      setActiveMobileMenu(null)
      setActiveCategory(null)
      setActiveSubcategory(null)
    } else {
      setActiveMobileMenu(key)
      setActiveCategory(null)
      setActiveSubcategory(null)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveMobileMenu(null)
    setActiveCategory(null)
    setActiveSubcategory(null)
  }

  // Helper function to get localized URL
  const getLocalizedUrl = (url) => {
    const isLocalizedPath = pathname.startsWith(`/${i18n.language}/`) || pathname === `/${i18n.language}`
    return isLocalizedPath ? `/${i18n.language}${url}` : url
  }

  // Fetch dynamic content when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Fetch blogs for about section with enhanced latest post logic
      if (activeMobileMenu === "about" && mobileBlogs.length === 0) {
        setMobileBlogsLoading(true)

        const fetchLatestBlogs = async () => {
          try {
            console.log(`Fetching latest mobile blogs for language: ${i18n.language}`)

            // Enhanced parameters for latest posts with better cache busting
            const data = await fetchLocalizedPosts({
              language: i18n.language,
              perPage: 4,
              page: 1,
              orderBy: "date",
              order: "desc",
              search: "",
              // Additional parameters to ensure latest posts
              status: "publish",
              _embed: true,
              _fields: "id,date,title,link,excerpt,_embedded",
              // Strong cache busting with timestamp
              _cacheBust: Date.now(),
              // Force fresh data
              _t: new Date().getTime(),
            })

            // Double-check sorting on client side to ensure latest posts
            const sortedData = data
              .filter((post) => post && post.date) // Filter out invalid posts
              .sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                return dateB - dateA // Latest first
              })
              .slice(0, 4) // Ensure only 4 posts

            console.log(
              "Latest mobile blog posts fetched:",
              sortedData.map((post) => ({
                title: post.cleanTitle,
                date: post.date,
              })),
            )

            setMobileBlogs(sortedData)
          } catch (error) {
            console.error("Error fetching mobile blogs:", error)

            // Enhanced fallback with direct WordPress API call
            try {
              const fallbackResponse = await fetch(
                `https://www.pranaair.com/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc&status=publish&_embed=true&_cachebust=${Date.now()}${i18n.language !== "en" ? `&lang=${i18n.language}` : ""}`,
              )

              if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json()
                const processedFallback = fallbackData
                  .map((post) => ({
                    ...post,
                    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
                    cleanTitle: post.title?.rendered?.replace(/<[^>]*>/g, "") || "",
                    cleanExcerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "",
                  }))
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 4)

                setMobileBlogs(processedFallback)
                console.log("Fallback mobile blog posts loaded:", processedFallback.length)
              }
            } catch (fallbackError) {
              console.error("Mobile blog fallback fetch also failed:", fallbackError)
            }
          } finally {
            setMobileBlogsLoading(false)
          }
        }

        fetchLatestBlogs()
      }

      // Fetch case studies with improved method
      if (activeMobileMenu === "case-studies" && mobileCaseStudies.length === 0) {
        setMobileCaseStudiesLoading(true)

        // Try multiple methods to fetch case studies
        const fetchCaseStudiesWithFallback = async () => {
          try {
            // First try with fetchLocalizedCaseStudies
            let data = await fetchLocalizedCaseStudies(i18n.language, 6)

            // If no results, try with general posts approach
            if (!data || data.length === 0) {
              console.log("No case studies found with primary method, trying fallback...")
              data = await fetchLocalizedPosts({
                language: i18n.language,
                perPage: 6,
                category: "case-studies",
              })
            }

            // If still no results, try with English fallback
            if (!data || (data.length === 0 && i18n.language !== "en")) {
              console.log("No case studies found in current language, trying English fallback...")
              data = await fetchLocalizedCaseStudies("en", 6)
            }

            console.log(`Found ${data.length} case studies for language: ${i18n.language}`)
            setMobileCaseStudies(data)
          } catch (error) {
            console.error("Error fetching case studies:", error)
          } finally {
            setMobileCaseStudiesLoading(false)
          }
        }

        fetchCaseStudiesWithFallback()
      }
    }
  }, [isMobileMenuOpen, activeMobileMenu, i18n.language, mobileBlogs.length, mobileCaseStudies.length])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(i18n.language === "hi" ? "hi-IN" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <header className="header-container">
        <div className="header-inner">
          {/* Logo */}
          <Link
            href={
              pathname.startsWith(`/${i18n.language}/`) || pathname === `/${i18n.language}` ? `/${i18n.language}` : "/"
            }
            className="logo-container"
          >
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
                <li key={item.key} className="nav-item">
                  {item.hasDropdown ? (
                    <>
                      <Link href={getLocalizedUrl(item.href)} className="nav-link">
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
                      {item.key === "products" && (
                        <div className="mega-menu-container">
                          <MegaMenu onClose={() => { }} />
                        </div>
                      )}
                      {item.key === "solutions" && (
                        <div className="mega-menu-container">
                          <SolutionsMegaMenu onClose={() => { }} />
                        </div>
                      )}
                      {item.key === "know-what" && (
                        <div className="mega-menu-container">
                          <KnowWhatMegaMenu onClose={() => { }} />
                        </div>
                      )}
                      {item.key === "about" && (
                        <div className="mega-menu-container">
                          <AboutUsMegaMenu onClose={() => { }} />
                        </div>
                      )}
                      {item.key === "case-studies" && (
                        <div className="mega-menu-container">
                          <CaseStudiesMegaMenu onClose={() => { }} />
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={getLocalizedUrl(item.href)} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Menu */}
          <div className="right-menu">
            <Link href={getLocalizedUrl("/contact")} className="get-in-touch">
              {t("nav.getInTouch")}
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
                <span>{i18n.language === "hi" ? "हिंदी" : "English (UK)"}</span>
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
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        className="d-block w-100 text-start px-4 py-2"
                        style={{
                          fontSize: "14px",
                          backgroundColor: i18n.language === lang.code ? "#f3f4f6" : "transparent",
                          color: i18n.language === lang.code ? "#7ab261" : "#374151",
                          border: "none",
                          width: "100%",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => changeLanguage(lang.code)}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href={getLocalizedUrl("/login")} className="login-link">
              {t("nav.login")}
            </Link>

            <Link href={getLocalizedUrl("/cart")} className="cart-link">
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
        <div className="mobile-menu" ref={megaMenuRef}>
          <div className="mobile-menu-header">
            <Link
              href={
                pathname.startsWith(`/${i18n.language}/`) || pathname === `/${i18n.language}`
                  ? `/${i18n.language}`
                  : "/"
              }
              className="logo-container"
              onClick={closeMobileMenu}
            >
              <Image
                src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
                alt="Prana Air"
                width={140}
                height={46}
                priority
              />
            </Link>
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
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
            {mainNavItems.map((item) => (
              <div key={item.key} className="mobile-nav-item">
                <button
                  className={`mobile-nav-button ${activeMobileMenu === item.key ? "active" : ""}`}
                  onClick={() => handleMobileNavClick(item.key)}
                >
                  {item.label}
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
                      transform: activeMobileMenu === item.key ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Mobile Menu Content */}
                {activeMobileMenu === item.key && (
                  <div className="mobile-category-menu">
                    {/* Products Menu - Using exact same data as desktop */}
                    {item.key === "products" && (
                      <>
                        {productCategories.map((category) => (
                          <div key={category.slug} className="mobile-category-section">
                            <button
                              className={`mobile-category-button ${activeCategory === category.slug ? "active" : ""}`}
                              onClick={() => handleCategoryClick(category.slug)}
                            >
                              <Image
                                src={category.icon || "/placeholder.svg?height=24&width=24"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              {category.name}
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
                                  transform: activeCategory === category.slug ? "rotate(180deg)" : "none",
                                  transition: "transform 0.2s",
                                }}
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </button>

                            {activeCategory === category.slug && (
                              <>
                                {/* Show subcategories if they exist */}
                                {category.subcategories && category.subcategories.length > 0 && (
                                  <div className="mobile-subcategory-menu">
                                    {category.subcategories.map((subcategory) => (
                                      <div key={subcategory.slug}>
                                        <button
                                          className={`mobile-subcategory-button ${activeSubcategory === subcategory.slug ? "active" : ""
                                            }`}
                                          onClick={() => handleSubcategoryClick(subcategory.slug)}
                                        >
                                          {subcategory.icon && (
                                            <Image
                                              src={subcategory.icon || "/placeholder.svg?height=24&width=24"}
                                              alt=""
                                              width={24}
                                              height={24}
                                            />
                                          )}
                                          {subcategory.name}
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
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                          </svg>
                                        </button>

                                        {activeSubcategory === subcategory.slug && subcategory.products && (
                                          <div className="mobile-product-showcase">
                                            <div className="mobile-product-grid-enhanced">
                                              {subcategory.products.map((product) => (
                                                <Link
                                                  key={product.slug}
                                                  href={getLocalizedUrl(product.url)}
                                                  className="mobile-product-card-enhanced"
                                                  onClick={closeMobileMenu}
                                                >
                                                  <div className="mobile-product-image-enhanced">
                                                    <Image
                                                      src={product.image || "/placeholder.svg?height=120&width=120"}
                                                      alt={product.name}
                                                      width={120}
                                                      height={120}
                                                      style={{ objectFit: "cover" }}
                                                    />
                                                  </div>
                                                  <div className="mobile-product-name-enhanced">{product.name}</div>
                                                </Link>
                                              ))}
                                            </div>

                                            <div className="mobile-help-section">
                                              <p>
                                                Welcome to Prana Air, if you need help for air quality monitors &
                                                sensors, we are ready to help.
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Custom Content for categories without subcategories */}
                                {category.customContent && (
                                  <div className="mobile-custom-content">
                                    {category.slug === "air-quality-pcb" && (
                                      <Link href={getLocalizedUrl("/air-quality-pcb-board/")} onClick={closeMobileMenu}>
                                        <Image
                                          src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-air-quality-PCBs-borads-2048x596.jpg"
                                          alt="Air Quality PCBs"
                                          width={300}
                                          height={87}
                                          className="w-full h-auto rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold mt-2 text-center">Air Quality PCBs</h3>
                                      </Link>
                                    )}
                                    {category.slug === "weather-station" && (
                                      <Link
                                        href={getLocalizedUrl("/air-quality-monitor/weather-station/")}
                                        onClick={closeMobileMenu}
                                      >
                                        <Image
                                          src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Weather-station-Measure-weather-data-with-air-quality-2048x594.jpg"
                                          alt="Weather Station"
                                          width={300}
                                          height={87}
                                          className="w-full h-auto rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold mt-2 text-center">Weather Station</h3>
                                      </Link>
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </>
                    )}

                    {/* Solutions Menu - Using exact same data as desktop */}
                    {item.key === "solutions" && (
                      <div className="mobile-subcategory-menu">
                        {solutionsCategories.map((category) => (
                          <div key={category.slug} className="mobile-solutions-category">
                            <h4 className="mobile-category-title">{category.name}</h4>
                            {category.products.map((solution) => (
                              <Link
                                key={solution.slug}
                                href={getLocalizedUrl(solution.url)}
                                className="mobile-subcategory-button"
                                onClick={closeMobileMenu}
                              >
                                <Image
                                  src={solution.image || "/placeholder.svg?height=24&width=24"}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                {solution.name}
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
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Case Studies Menu - Dynamic Content */}
                    {item.key === "case-studies" && (
                      <div className="case-mobile-subcategory-menu">
                        {mobileCaseStudiesLoading ? (
                          <div style={{ padding: "20px", textAlign: "center", color: "#6b7280" }}>
                            Loading case studies...
                          </div>
                        ) : mobileCaseStudies.length > 0 ? (
                          <>
                            {mobileCaseStudies.map((caseStudy) => (
                              <Link
                                key={caseStudy.id}
                                href={caseStudy.link}
                                className="mobile-case-study-card"
                                onClick={closeMobileMenu}
                              >
                                <div className="mobile-case-study-image">
                                  <Image
                                    src={
                                      caseStudy.featuredImage || "/placeholder.svg?height=60&width=80&query=case study"
                                    }
                                    alt={caseStudy.cleanTitle}
                                    width={80}
                                    height={60}
                                    style={{ objectFit: "cover" }}
                                  />
                                </div>
                                <div className="mobile-case-study-content">
                                  <h4 className="mobile-case-study-title">{caseStudy.cleanTitle}</h4>
                                  <span className="mobile-case-study-date">{formatDate(caseStudy.date)}</span>
                                </div>
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
                                  style={{ marginLeft: "auto", flexShrink: 0 }}
                                >
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                              </Link>
                            ))}
                            <Link
                              href={getLocalizedUrl("/case-studies")}
                              className="mobile-view-all-button"
                              onClick={closeMobileMenu}
                            >
                              View All Case Studies
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
                            </Link>
                          </>
                        ) : (
                          <div style={{ padding: "20px", textAlign: "center", color: "#6b7280" }}>
                            No case studies found
                          </div>
                        )}
                      </div>
                    )}

                    {/* Know What Menu - Using exact same data as desktop */}
                    {item.key === "know-what" && (
                      <div className="mobile-subcategory-menu">
                        {knowWhatArticles.map((article) => (
                          <Link
                            key={article.slug}
                            href={getLocalizedUrl(article.url)}
                            className="mobile-subcategory-button"
                            onClick={closeMobileMenu}
                          >
                            <span style={{ fontSize: "20px" }}>{article.icon}</span>
                            {article.name}
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
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* About Menu - Dynamic Blogs */}
                    {item.key === "about" && (
                      <div className="mobile-subcategory-menu">
                        {/* Dynamic Blogs Section */}
                        <div className="mobile-blogs-section">
                          <h4 className="mobile-section-title">Latest Blogs</h4>
                          {mobileBlogsLoading ? (
                            <div style={{ padding: "20px", textAlign: "center", color: "#6b7280" }}>
                              Loading latest blogs...
                            </div>
                          ) : mobileBlogs.length > 0 ? (
                            <>
                              {mobileBlogs.map((blog) => (
                                <Link
                                  key={blog.id}
                                  href={blog.link}
                                  className="mobile-blog-card"
                                  onClick={closeMobileMenu}
                                >
                                  <div className="mobile-blog-image">
                                    <Image
                                      src={blog.featuredImage || "/placeholder.svg?height=60&width=80&query=blog post"}
                                      alt={blog.cleanTitle}
                                      width={80}
                                      height={60}
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                  <div className="mobile-blog-content">
                                    <h4 className="mobile-blog-title">{blog.cleanTitle}</h4>
                                    <span className="mobile-blog-date">{formatDate(blog.date)}</span>
                                  </div>
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
                                    style={{ marginLeft: "auto", flexShrink: 0 }}
                                  >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </Link>
                              ))}
                              <Link
                                href={getLocalizedUrl("https://www.pranaair.com/blog/")}
                                className="mobile-view-all-button"
                                onClick={closeMobileMenu}
                              >
                                View All Blogs
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
                              </Link>
                            </>
                          ) : (
                            <div style={{ padding: "20px", textAlign: "center", color: "#6b7280" }}>No blogs found</div>
                          )}
                        </div>

                        {/* Static About Links */}
                        <div className="mobile-about-links">
                          <h4 className="mobile-section-title">About Us</h4>
                          <Link
                            href={getLocalizedUrl("/about")}
                            className="mobile-subcategory-button"
                            onClick={closeMobileMenu}
                          >
                            <Image src="/placeholder.svg?height=24&width=24" alt="" width={24} height={24} />
                            Our Story
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
                          </Link>

                          <Link
                            href={getLocalizedUrl("/about/team")}
                            className="mobile-subcategory-button"
                            onClick={closeMobileMenu}
                          >
                            <Image src="/placeholder.svg?height=24&width=24" alt="" width={24} height={24} />
                            Team
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
                          </Link>

                          <Link
                            href={getLocalizedUrl("/contact")}
                            className="mobile-subcategory-button"
                            onClick={closeMobileMenu}
                          >
                            <Image src="/placeholder.svg?height=24&width=24" alt="" width={24} height={24} />
                            Contact Us
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
                          </Link>

                          <Link
                            href={getLocalizedUrl("/support")}
                            className="mobile-subcategory-button"
                            onClick={closeMobileMenu}
                          >
                            <Image src="/placeholder.svg?height=24&width=24" alt="" width={24} height={24} />
                            Support
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
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher in Mobile Menu */}
          <div className="mobile-nav-item mobile-language-section">
            <div className="mobile-language-header">
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
                style={{ marginRight: "8px" }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span style={{ fontSize: "16px", color: "#374151", fontWeight: "500" }}>
                {t("nav.selectLanguage") || "Select Language"}
              </span>
            </div>

            <div className="mobile-language-dropdown">
              <select
                value={i18n.language}
                onChange={(e) => {
                  changeLanguage(e.target.value)
                  closeMobileMenu()
                }}
                className="mobile-language-select"
              >
                {availableLanguages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              {/* Custom Dropdown Styling */}
              <div className="mobile-language-custom-dropdown">
                {isLanguageDropdownOpen && (
                  <div className="mobile-language-dropdown-menu">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`mobile-language-option ${i18n.language === lang.code ? "active" : ""}`}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLanguageDropdownOpen(false)
                          closeMobileMenu()
                        }}
                      >
                        <span className="mobile-language-flag">{lang.code === "hi" ? "🇮🇳" : "🇬🇧"}</span>
                        <span className="mobile-language-name">{lang.name}</span>
                        {i18n.language === lang.code && (
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
                            style={{ marginLeft: "auto", color: "#7ab261" }}
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div style={{ padding: "16px", marginTop: "16px" }}>
            <Link
              href={getLocalizedUrl("/contact")}
              onClick={closeMobileMenu}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#7ab261",
                color: "white",
                textAlign: "center",
                borderRadius: "6px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              {t("nav.getInTouch") || "Get in Touch"}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default MainHeader
