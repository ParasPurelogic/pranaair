"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubCategory, setActiveSubCategory] = useState(null)

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
          icon: "📊",
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
                {
                  id: "indoor-multi",
                  name: "Indoor Multi-Parameter Monitor",
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

  // Set default category and subcategory when menu opens
  useEffect(() => {
    if (activeMenu) {
      if (activeMenu === "solutions") {
        setActiveCategory("solutions")
        setActiveSubCategory("for-applications")
      } else if (activeMenu === "products") {
        setActiveCategory("products")
      } else if (activeMenu === "know-what") {
        setActiveCategory("know-what")
      } else if (activeMenu === "case-studies") {
        setActiveCategory("case-studies")
      } else if (activeMenu === "about") {
        setActiveCategory("about")
      }
    }
  }, [activeMenu])

  // Update subcategory when category changes
  useEffect(() => {
    if (activeCategory && menuData[activeCategory]) {
      if (activeCategory === "products") {
        // For products, we need to set the active subcategory to one of the product categories
        const productCategories = Object.keys(menuData.products.subcategories)
        if (productCategories.length > 0) {
          setActiveSubCategory(productCategories[0])
        }
      } else if (menuData[activeCategory].subcategories) {
        setActiveSubCategory(
          menuData[activeCategory].defaultSubcategory || Object.keys(menuData[activeCategory].subcategories)[0],
        )
      } else {
        setActiveSubCategory(null)
      }
    }
  }, [activeCategory])

  // Render solutions menu content
  const renderSolutionsContent = () => {
    if (activeCategory === "solutions" && menuData.solutions.subcategories) {
      const subcategory = menuData.solutions.subcategories[activeSubCategory]
      if (subcategory && subcategory.items) {
        return (
          <div className="row g-4 p-4">
            {subcategory.items.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                <Link href={`/solutions/${activeSubCategory}/${item.id}`} className="text-decoration-none">
                  <div className="position-relative rounded overflow-hidden" style={{ height: "180px" }}>
                    <Image
                      src={item.image || "/placeholder.svg?height=300&width=400"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                    >
                      <h6 className="mb-0">{item.name}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )
      }
    }
    return null
  }

  // Render know what menu content
  const renderKnowWhatContent = () => {
    if (activeCategory === "know-what" && menuData["know-what"].items) {
      return (
        <div className="p-4">
          <div className="row">
            {menuData["know-what"].items.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <Link href={`/know-what/${item.id}`} className="text-decoration-none text-dark">
                  <div className="d-flex align-items-center p-2 rounded hover-bg">
                    <span className="me-2" style={{ fontSize: "1.5rem" }}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  // Render case studies menu content
  const renderCaseStudiesContent = () => {
    if (activeCategory === "case-studies" && menuData["case-studies"].items) {
      return (
        <div className="p-4">
          <div className="row g-4">
            {menuData["case-studies"].items.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-3 mb-4">
                <Link href={`/case-studies/${item.id}`} className="text-decoration-none">
                  <div className="position-relative rounded overflow-hidden" style={{ height: "180px" }}>
                    <Image
                      src={item.image || "/placeholder.svg?height=300&width=400"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
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
      )
    }
    return null
  }

  // Render products menu content
  const renderProductsContent = () => {
    if (activeCategory === "products" && activeSubCategory) {
      const subcategory = menuData.products.subcategories[activeSubCategory]

      if (subcategory) {
        // If the subcategory has its own subcategories (like air-quality-monitors)
        if (subcategory.subcategories) {
          return (
            <div className="pt-4 inner-flex gap-4">
              {/* Horizontal subcategories */}
              <div className="subcategories-horizontal mb-4 border-bottom pb-3">
                <div className="d-grid">
                  {Object.entries(subcategory.subcategories).map(([key, subSubcategory]) => (
                    <span
                      key={key}
                      className={`subcategory-link ${activeSubSubCategory === key ? "active" : ""}`}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setActiveSubSubCategory(key)}
                    >
                      {subSubcategory.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Products grid */}
              <div className="row g-4">
                {activeSubSubCategory &&
                  subcategory.subcategories[activeSubSubCategory] &&
                  subcategory.subcategories[activeSubSubCategory].products &&
                  subcategory.subcategories[activeSubSubCategory].products.map((product) => (
                    <div key={`${activeSubSubCategory}-${product.id}`} className="col-lg-3">
                      <Link
                        href={`/products/${activeSubCategory}/${activeSubSubCategory}/${product.id}`}
                        className="product-card text-decoration-none"
                      >
                        <div className="product-image mb-3">
                          <Image
                            src={product.image || "/placeholder.svg?height=200&width=200"}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="img-fluid rounded"
                          />
                        </div>
                        <h6 className="product-name text-center mb-0">{product.name}</h6>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )
        }
        // If the subcategory has direct products (like air-purifier)
        else if (subcategory.products) {
          return (
            <div className="p-4">
              <div className="row g-4">
                {subcategory.products.map((product) => (
                  <div key={product.id} className="col-lg-3">
                    <Link
                      href={`/products/${activeSubCategory}/${product.id}`}
                      className="product-card text-decoration-none"
                    >
                      <div className="product-image mb-3">
                        <Image
                          src={product.image || "/placeholder.svg?height=200&width=200"}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="img-fluid rounded"
                        />
                      </div>
                      <h6 className="product-name text-center mb-0">{product.name}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      }
    }
    return null
  }

  // State for sub-subcategory (for products with nested categories)
  const [activeSubSubCategory, setActiveSubSubCategory] = useState(null)

  // Update sub-subcategory when subcategory changes
  useEffect(() => {
    if (activeCategory === "products" && activeSubCategory) {
      const subcategory = menuData.products.subcategories[activeSubCategory]
      if (subcategory && subcategory.subcategories) {
        setActiveSubSubCategory(Object.keys(subcategory.subcategories)[0])
      } else {
        setActiveSubSubCategory(null)
      }
    }
  }, [activeSubCategory])

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid px-0">
        <Link href="/" className="navbar-brand ms-4">
          <img
            src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
            alt="Prana Air"
            width={80}
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Solutions Menu Item */}
            <li
              className="nav-item dropdown position-static"
              onMouseEnter={() => {
                setActiveMenu("solutions")
                setActiveCategory("solutions")
                setActiveSubCategory("for-applications")
              }}
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveCategory(null)
                setActiveSubCategory(null)
                setActiveSubSubCategory(null)
              }}
            >
              <span className="nav-link" style={{ cursor: "pointer" }}>
                Solutions
              </span>

              {activeMenu === "solutions" && (
                <div className="dropdown-menu w-100 show m-0 p-0 border-0 rounded-0">
                  <div className="mega-menu-content">
                    <div className="row g-0">
                      {/* Left sidebar with subcategories */}
                      <div className="col-lg-3 category-sidebar border-end">
                        <ul className="list-unstyled mb-0">
                          {Object.entries(menuData.solutions.subcategories).map(([key, subcategory]) => (
                            <li
                              key={key}
                              className={`category-item ${activeSubCategory === key ? "active" : ""}`}
                              onMouseEnter={() => setActiveSubCategory(key)}
                            >
                              <span
                                className="d-flex align-items-center text-decoration-none p-3"
                                style={{ cursor: "pointer" }}
                              >
                                {subcategory.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right content area */}
                      <div className="col">{renderSolutionsContent()}</div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Products Menu Item */}
            <li
              className="nav-item dropdown position-static"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveCategory(null)
                setActiveSubCategory(null)
                setActiveSubSubCategory(null)
              }}
            >
              <span className="nav-link" style={{ cursor: "pointer" }}>
                Products
              </span>

              {activeMenu === "products" && (
                <div className="dropdown-menu w-100 show m-0 p-0 border-0 rounded-0">
                  <div className="mega-menu-content">
                    <div className="row g-0">
                      {/* Left sidebar with main categories */}
                      <div className="col-lg-3 category-sidebar border-end">
                        <ul className="list-unstyled mb-0">
                          {Object.keys(menuData.products.subcategories).map((key) => (
                            <li
                              key={key}
                              className={`category-item ${activeSubCategory === key ? "active" : ""}`}
                              onMouseEnter={() => setActiveSubCategory(key)}
                            >
                              <span
                                className="d-flex align-items-center text-decoration-none p-3"
                                style={{ cursor: "pointer" }}
                              >
                                <span className="me-2">{menuData.products.subcategories[key].icon}</span>
                                {menuData.products.subcategories[key].name}
                                {menuData.products.subcategories[key].subcategories && (
                                  <span className="ms-auto">▶</span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right content area */}
                      <div className="col">{renderProductsContent()}</div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Case Studies Menu Item */}
            <li
              className="nav-item dropdown position-static"
              onMouseEnter={() => {
                setActiveMenu("case-studies")
                setActiveCategory("case-studies")
              }}
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveCategory(null)
                setActiveSubCategory(null)
                setActiveSubSubCategory(null)
              }}
            >
              <Link href="/case-studies" className="nav-link">
                Case Studies
              </Link>

              {activeMenu === "case-studies" && (
                <div className="dropdown-menu w-100 show m-0 p-0 border-0 rounded-0">
                  <div className="mega-menu-content">{renderCaseStudiesContent()}</div>
                </div>
              )}
            </li>

            {/* Know What Menu Item */}
            <li
              className="nav-item dropdown position-static"
              onMouseEnter={() => {
                setActiveMenu("know-what")
                setActiveCategory("know-what")
              }}
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveCategory(null)
                setActiveSubCategory(null)
                setActiveSubSubCategory(null)
              }}
            >
              <Link href="/know-what" className="nav-link">
                Know What
              </Link>

              {activeMenu === "know-what" && (
                <div className="dropdown-menu w-100 show m-0 p-0 border-0 rounded-0">
                  <div className="mega-menu-content">{renderKnowWhatContent()}</div>
                </div>
              )}
            </li>

            {/* About Menu Item */}
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Get in touch */}
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                <span className="btn btn-success rounded-pill px-4">Get in touch</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side items */}
        <div className="d-flex align-items-center ms-auto me-4">
          <Link href="/login" className="text-decoration-none text-dark me-4">
            Login
          </Link>
          <div className="d-flex align-items-center me-4">
            <span className="me-2">Global</span>
            <i className="fas fa-globe"></i>
          </div>
          <Link href="/cart" className="text-decoration-none text-dark position-relative">
            <i className="fas fa-shopping-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">0</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MegaMenu

