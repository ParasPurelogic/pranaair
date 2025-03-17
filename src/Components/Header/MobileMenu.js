"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubCategory, setActiveSubCategory] = useState(null)
  const [activeSubSubCategory, setActiveSubSubCategory] = useState(null)

  // Menu data structure
  const menuData = {
    solutions: {
      name: "Solutions",
      icon: "🏢",
      subcategories: {
        "for-applications": {
          name: "For Applications",
          items: [
            {
              id: "smart-city",
              name: "Smart City Project",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/smart-city-project.jpg",
            },
            {
              id: "construction-sites",
              name: "Construction Sites",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/construction-sites.jpg",
            },
            {
              id: "institutes-schools",
              name: "Institutes | Schools",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/institutes-schools.jpg",
            },
            {
              id: "air-quality-drone",
              name: "Air Quality Drone",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/air-quality-drone.jpg",
            },
            {
              id: "hotel-businesses",
              name: "Hotel Businesses",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/hotel-businesses.jpg",
            },
            {
              id: "restaurants",
              name: "Restaurants",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/restaurants.jpg",
            },
          ],
        },
        "for-industries": {
          name: "For Industries",
          items: [
            {
              id: "rmc-plants",
              name: "RMC Plants",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/rmc-plants.jpg",
            },
            {
              id: "fitness-center",
              name: "Fitness Center | GYM",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/fitness-center.jpg",
            },
            {
              id: "car-parking",
              name: "Car Parking Lot",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/car-parking.jpg",
            },
            { id: "office", name: "Office", image: "https://www.pranaair.com/wp-content/uploads/2024/08/office.jpg" },
            {
              id: "retail-stores",
              name: "Retail Stores",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/retail-stores.jpg",
            },
            {
              id: "airports",
              name: "Airports",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/airports.jpg",
            },
          ],
        },
      },
    },
    products: {
      name: "Products",
      icon: "📦",
      subcategories: {
        "air-quality-monitors": {
          name: "Air Quality Monitors",
          subcategories: {
            handheld: {
              name: "Handheld",
              products: [
                {
                  id: "pocket-pm25",
                  name: "Pocket PM2.5",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                },
                {
                  id: "pocket-co2",
                  name: "Pocket CO2",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                },
                {
                  id: "oxyco",
                  name: "OxyCO",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                },
              ],
            },
            indoor: {
              name: "Indoor",
              products: [
                {
                  id: "indoor-pm25",
                  name: "Indoor PM2.5 Monitor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                },
                {
                  id: "indoor-co2",
                  name: "Indoor CO2 Monitor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                },
              ],
            },
            outdoor: {
              name: "Outdoor",
              products: [
                {
                  id: "outdoor-pm25",
                  name: "Outdoor PM2.5 Monitor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp",
                },
                {
                  id: "outdoor-multi",
                  name: "Outdoor Multi-Parameter Station",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp",
                },
              ],
            },
          },
        },
        "air-quality-sensors": {
          name: "Air Quality Sensors",
          icon: "🔍",
          subcategories: {
            "pm-sensor": {
              name: "PM Sensors",
              products: [
                {
                  id: "outdoor-pm",
                  name: "Outdoor PM",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Outdoor-PM-Sensors.jpg",
                },
                {
                  id: "indoor-pm",
                  name: "Indoor PM",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Indoor-PM-Sensors.jpg",
                },
              ],
            },
            "gas-sensor": {
              name: "Gas Sensors",
              products: [
                {
                  id: "co2-sensor",
                  name: "CO2 Sensor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg",
                },
                {
                  id: "co-sensor",
                  name: "CO Sensor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg",
                },
                {
                  id: "tvoc-sensor",
                  name: "TVOC Sensor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/TVOC-gas-sensor.jpg",
                },
              ],
            },
          },
        },
        "air-purifier": {
          name: "Air Purifier",
          icon: "💨",
          products: [
            { id: "nano-co", name: "Nano CO", image: "/placeholder.svg?height=200&width=200" },
            { id: "hepa-purifier", name: "HEPA Air Purifier", image: "/placeholder.svg?height=200&width=200" },
          ],
        },
      },
    },
    "know-what": {
      name: "Know What",
      icon: "❓",
      items: [
        { id: "air-pollution", name: "What is Air Pollution?", icon: "🏭" },
        { id: "co", name: "What is CO?", icon: "🔄" },
        { id: "methane", name: "What is Methane?", icon: "💨" },
        { id: "humidity", name: "What is Humidity?", icon: "💧" },
        { id: "no2", name: "What is NO2?", icon: "🌫️" },
        { id: "ammonia", name: "What is Ammonia(NH3)?", icon: "🧪" },
        { id: "so2", name: "What is SO2?", icon: "🌋" },
        { id: "pm25", name: "What is PM2.5 | PM10?", icon: "🔬" },
        { id: "pollen", name: "What is Pollen?", icon: "🌼" },
        { id: "temperature", name: "What is Temperature?", icon: "🌡️" },
        { id: "h2s", name: "What is H2S?", icon: "☁️" },
        { id: "ozone", name: "What is Ozone?", icon: "🌐" },
        { id: "co2", name: "What is CO2?", icon: "🏭" },
        { id: "vocs", name: "What is VOCs?", icon: "💨" },
        { id: "mold", name: "What is Mold?", icon: "🍄" },
        { id: "radon", name: "What is Radon?", icon: "☢️" },
        { id: "noise", name: "What is Noise?", icon: "🔊" },
      ],
    },
    "case-studies": {
      name: "Case Studies",
      icon: "📝",
      items: [
        {
          id: "tata-steel",
          name: "Prana Air aids TATA Steel in Air Quality Monitoring",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/tata-steel-case-study.jpg",
        },
        {
          id: "interglobe",
          name: "Prana Air Aided in Air Quality Monitoring Solutions for INTERGLOBE",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/interglobe-case-study.jpg",
        },
        {
          id: "mahindra",
          name: "Prana Air helped Mahindra Lifespaces to monitor air pollution",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/mahindra-case-study.jpg",
        },
        {
          id: "cii",
          name: "Prana Air helped CII to monitor air pollution",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/cii-case-study.jpg",
        },
      ],
    },
    about: {
      name: "About",
      icon: "ℹ️",
    },
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveCategory(null)
    setActiveSubCategory(null)
    setActiveSubSubCategory(null)
  }

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null)
      setActiveSubCategory(null)
      setActiveSubSubCategory(null)
    } else {
      setActiveCategory(category)
      setActiveSubCategory(null)
      setActiveSubSubCategory(null)
    }
  }

  const handleSubCategoryClick = (subCategory) => {
    if (activeSubCategory === subCategory) {
      setActiveSubCategory(null)
      setActiveSubSubCategory(null)
    } else {
      setActiveSubCategory(subCategory)
      setActiveSubSubCategory(null)
    }
  }

  const handleSubSubCategoryClick = (subSubCategory) => {
    if (activeSubSubCategory === subSubCategory) {
      setActiveSubSubCategory(null)
    } else {
      setActiveSubSubCategory(subSubCategory)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu")
      if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest(".hamburger-btn")) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Render solutions items
  const renderSolutionsItems = () => {
    if (activeCategory === "solutions" && activeSubCategory && menuData.solutions.subcategories[activeSubCategory]) {
      return (
        <>
          <div className="mobile-submenu-header border-bottom p-3">
            <button
              className="btn btn-sm btn-light d-flex align-items-center"
              onClick={() => setActiveSubCategory(null)}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Back
            </button>
          </div>
          <div className="p-3">
            <div className="row g-3">
              {menuData.solutions.subcategories[activeSubCategory].items.map((item) => (
                <div key={item.id} className="col-6">
                  <Link href={`/solutions/${activeSubCategory}/${item.id}`} className="text-decoration-none text-dark">
                    <div className="product-card text-center">
                      <div className="product-image mb-2">
                        <Image
                          src={item.image || "/placeholder.svg?height=120&width=120"}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="img-fluid rounded"
                        />
                      </div>
                      <h6 className="product-name small mb-0">{item.name}</h6>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }
    return null
  }

  // Render know what items
  const renderKnowWhatItems = () => {
    if (activeCategory === "know-what" && menuData["know-what"].items) {
      return (
        <>
          <div className="mobile-submenu-header border-bottom p-3">
            <button className="btn btn-sm btn-light d-flex align-items-center" onClick={() => setActiveCategory(null)}>
              <i className="fas fa-arrow-left me-2"></i>
              Back
            </button>
          </div>
          <div className="p-3">
            <div className="row g-2">
              {menuData["know-what"].items.map((item) => (
                <div key={item.id} className="col-12 border-bottom">
                  <Link
                    href={`/know-what/${item.id}`}
                    className="text-decoration-none text-dark d-flex align-items-center p-2"
                  >
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }
    return null
  }

  return (
    <div className="d-block d-lg-none">
      {/* Hamburger Button */}
      <button className="hamburger-btn btn border-0 p-0" onClick={toggleMenu} aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu position-fixed top-0 start-0 h-100 bg-white ${isMenuOpen ? "show" : ""}`}
        style={{
          width: "100%",
          zIndex: 1050,
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          overflow: "auto",
        }}
      >
        <div className="mobile-menu-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <Link href="/" className="navbar-brand">
            <img
              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
              alt="Prana Air"
              width={60}
            />
          </Link>
          <button className="btn-close" onClick={toggleMenu} aria-label="Close menu"></button>
        </div>

        <div className="mobile-menu-content">
          {/* Main Categories */}
          {!activeCategory && (
            <ul className="list-unstyled mb-0">
              {Object.entries(menuData).map(([key, category]) => (
                <li key={key} className="border-bottom">
                  <div
                    className="d-flex justify-content-between align-items-center p-3"
                    onClick={() => handleCategoryClick(key)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-2">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    {(category.subcategories || category.items) && <i className="fas fa-chevron-right"></i>}
                  </div>
                </li>
              ))}
              <li className="border-bottom">
                <Link href="/contact" className="d-block p-3 text-decoration-none text-success">
                  Get in touch
                </Link>
              </li>
              <li className="border-bottom">
                <div className="d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex align-items-center">
                    <span className="me-2">🌐</span>
                    <span>Global</span>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </li>
              <li className="border-bottom">
                <Link href="/login" className="d-block p-3 text-decoration-none text-dark">
                  Login
                </Link>
              </li>
            </ul>
          )}

          {/* Solutions Subcategories */}
          {activeCategory === "solutions" && !activeSubCategory && (
            <>
              <div className="mobile-submenu-header border-bottom p-3">
                <button
                  className="btn btn-sm btn-light d-flex align-items-center"
                  onClick={() => setActiveCategory(null)}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </button>
              </div>
              <ul className="list-unstyled mb-0">
                {Object.entries(menuData.solutions.subcategories).map(([key, subcategory]) => (
                  <li key={key} className="border-bottom">
                    <div
                      className="d-flex justify-content-between align-items-center p-3"
                      onClick={() => handleSubCategoryClick(key)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{subcategory.name}</span>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Solutions Items */}
          {renderSolutionsItems()}

          {/* Products Subcategories */}
          {activeCategory === "products" && !activeSubCategory && (
            <>
              <div className="mobile-submenu-header border-bottom p-3">
                <button
                  className="btn btn-sm btn-light d-flex align-items-center"
                  onClick={() => setActiveCategory(null)}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </button>
              </div>
              <ul className="list-unstyled mb-0">
                {Object.entries(menuData.products.subcategories).map(([key, subcategory]) => (
                  <li key={key} className="border-bottom">
                    <div
                      className="d-flex justify-content-between align-items-center p-3"
                      onClick={() => handleSubCategoryClick(key)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-2">{subcategory.icon || "📦"}</span>
                        <span>{subcategory.name}</span>
                      </div>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Product Categories */}
          {activeCategory === "products" &&
            activeSubCategory &&
            !activeSubSubCategory &&
            menuData.products.subcategories[activeSubCategory].subcategories && (
              <>
                <div className="mobile-submenu-header border-bottom p-3">
                  <button
                    className="btn btn-sm btn-light d-flex align-items-center"
                    onClick={() => setActiveSubCategory(null)}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </button>
                </div>
                <ul className="list-unstyled mb-0">
                  {Object.entries(menuData.products.subcategories[activeSubCategory].subcategories).map(
                    ([key, subSubcategory]) => (
                      <li key={key} className="border-bottom">
                        <div
                          className="d-flex justify-content-between align-items-center p-3"
                          onClick={() => handleSubSubCategoryClick(key)}
                          style={{ cursor: "pointer" }}
                        >
                          <span>{subSubcategory.name}</span>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}

          {/* Product Items */}
          {activeCategory === "products" &&
            activeSubCategory &&
            activeSubSubCategory &&
            menuData.products.subcategories[activeSubCategory].subcategories &&
            menuData.products.subcategories[activeSubCategory].subcategories[activeSubSubCategory] && (
              <>
                <div className="mobile-submenu-header border-bottom p-3">
                  <button
                    className="btn btn-sm btn-light d-flex align-items-center"
                    onClick={() => setActiveSubSubCategory(null)}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </button>
                </div>
                <div className="p-3">
                  <div className="row g-3">
                    {menuData.products.subcategories[activeSubCategory].subcategories[
                      activeSubSubCategory
                    ].products.map((product) => (
                      <div key={product.id} className="col-6">
                        <Link
                          href={`/products/${activeSubCategory}/${activeSubSubCategory}/${product.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className="product-card text-center">
                            <div className="product-image mb-2">
                              <Image
                                src={product.image || "/placeholder.svg?height=120&width=120"}
                                alt={product.name}
                                width={120}
                                height={120}
                                className="img-fluid rounded"
                              />
                            </div>
                            <h6 className="product-name small mb-0">{product.name}</h6>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          {/* Products with direct products */}
          {activeCategory === "products" &&
            activeSubCategory &&
            menuData.products.subcategories[activeSubCategory].products && (
              <>
                <div className="mobile-submenu-header border-bottom p-3">
                  <button
                    className="btn btn-sm btn-light d-flex align-items-center"
                    onClick={() => setActiveSubCategory(null)}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </button>
                </div>
                <div className="p-3">
                  <div className="row g-3">
                    {menuData.products.subcategories[activeSubCategory].products.map((product) => (
                      <div key={product.id} className="col-6">
                        <Link
                          href={`/products/${activeSubCategory}/${product.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className="product-card text-center">
                            <div className="product-image mb-2">
                              <Image
                                src={product.image || "/placeholder.svg?height=120&width=120"}
                                alt={product.name}
                                width={120}
                                height={120}
                                className="img-fluid rounded"
                              />
                            </div>
                            <h6 className="product-name small mb-0">{product.name}</h6>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          {/* Know What Items */}
          {renderKnowWhatItems()}

          {/* Case Studies Items */}
          {activeCategory === "case-studies" && menuData["case-studies"].items && (
            <>
              <div className="mobile-submenu-header border-bottom p-3">
                <button
                  className="btn btn-sm btn-light d-flex align-items-center"
                  onClick={() => setActiveCategory(null)}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back
                </button>
              </div>
              <div className="p-3">
                <div className="row g-3">
                  {menuData["case-studies"].items.map((item) => (
                    <div key={item.id} className="col-12 mb-3">
                      <Link href={`/case-studies/${item.id}`} className="text-decoration-none text-dark">
                        <div className="position-relative rounded overflow-hidden" style={{ height: "140px" }}>
                          <Image
                            src={item.image || "/placeholder.svg?height=140&width=300"}
                            alt={item.name}
                            width={300}
                            height={140}
                            className="w-100 h-100 object-fit-cover"
                          />
                          <div
                            className="position-absolute bottom-0 start-0 w-100 p-2 text-white"
                            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                          >
                            <h6 className="mb-0 small">{item.name}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
          style={{ zIndex: 1040, opacity: 0.5 }}
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  )
}

export default MobileMenu

