"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubCategory, setActiveSubCategory] = useState(null)

  const menuData = {
    "air-quality-monitors": {
      name: "Air Quality Monitors",
      icon: "📊",
      defaultSubcategory: "handheld",
      subcategories: {
        handheld: {
          name: "Handheld",
          products: [
            { id: "pocket-pm25", name: "Pocket PM2.5", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
            { id: "pocket-co2", name: "Pocket CO2", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
            { id: "oxyco", name: "OxyCO", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
          ],
        },
        indoor: {
          name: "Indoor",
          products: [
            { id: "indoor-pm25", name: "Indoor PM2.5 Monitor", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
            { id: "indoor-co2", name: "Indoor CO2 Monitor", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
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
            { id: "outdoor-pm25", name: "Outdoor PM2.5 Monitor", image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp" },
            {
              id: "outdoor-multi",
              name: "Outdoor Multi-Parameter Station",
              image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp",
            },
            { id: "oxyco", name: "OxyCO", image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg" },
          ],
        },
      },
    },
    "air-quality-sensors": {
      name: "Air Quality Sensors",
      icon: "🔍",
      products: [
        { id: "co-detector", name: "CO Detector", image: "/placeholder.svg?height=200&width=200" },
        { id: "nano-tvoc", name: "Nano TVOC", image: "/placeholder.svg?height=200&width=200" },
        { id: "breathalyzer", name: "Breathalyzer", image: "/placeholder.svg?height=200&width=200" },
      ],
    },
    "air-purifier": {
      name: "Air Purifier",
      icon: "💨",
      products: [
        { id: "nano-co", name: "Nano CO", image: "/placeholder.svg?height=200&width=200" },
        { id: "hepa-purifier", name: "HEPA Air Purifier", image: "/placeholder.svg?height=200&width=200" },
      ],
    },
  }
  // Set default category and subcategory when menu opens
  useEffect(() => {
    if (activeMenu === "products") {
      const defaultCategory = "air-quality-monitors"
      setActiveCategory(defaultCategory)
      setActiveSubCategory(menuData[defaultCategory].defaultSubcategory || "handheld")
    }
  }, [activeMenu])

  // Update subcategory when category changes
  useEffect(() => {
    if (activeCategory && menuData[activeCategory]) {
      if (menuData[activeCategory].subcategories) {
        setActiveSubCategory(
          menuData[activeCategory].defaultSubcategory || Object.keys(menuData[activeCategory].subcategories)[0],
        )
      } else {
        setActiveSubCategory(null)
      }
    }
  }, [activeCategory])

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid px-0">
        <Link href="/" className="navbar-brand ms-4">
        <img src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp" alt="Prana Air" width={80} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className="nav-item dropdown position-static"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => {
                setActiveMenu(null)
                setActiveCategory(null)
                setActiveSubCategory(null)
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
                          {Object.entries(menuData).map(([key, category]) => (
                            <li
                              key={key}
                              className={`category-item ${activeCategory === key ? "active" : ""}`}
                              onMouseEnter={() => setActiveCategory(key)}
                            >
                              <span
                                className="d-flex align-items-center text-decoration-none p-3"
                                style={{ cursor: "pointer" }}
                              >
                                <span className="me-2">{category.icon}</span>
                                {category.name}
                                {category.subcategories && <span className="ms-auto">▶</span>}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right content area */}
                      <div className="col">
                        {activeCategory && menuData[activeCategory].subcategories && (
                          <div className="pt-4 inner-flex gap-4">
                            {/* Horizontal subcategories */}
                            <div className="subcategories-horizontal mb-4 border-bottom pb-3">
                              <div className="d-grid">
                                {Object.entries(menuData[activeCategory].subcategories).map(([key, subcategory]) => (
                                  <span
                                    key={key}
                                    className={`subcategory-link ${activeSubCategory === key ? "active" : ""}`}
                                    style={{ cursor: "pointer" }}
                                    onMouseEnter={() => setActiveSubCategory(key)}
                                  >
                                    {subcategory.name}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Products grid */}
                            <div className="row g-4">
                              {activeSubCategory &&
                                menuData[activeCategory].subcategories[activeSubCategory].products.map((product) => (
                                  <div key={`${activeSubCategory}-${product.id}`} className="col-lg-3">
                                    <Link
                                      href={`/products/${activeCategory}/${activeSubCategory}/${product.id}`}
                                      className="product-card text-decoration-none"
                                    >
                                      <div className="product-image mb-3">
                                        <Image
                                          src={product.image}
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
                        )}

                        {/* Show products directly if no subcategories */}
                        {activeCategory && !menuData[activeCategory].subcategories && (
                          <div className="p-4">
                            <div className="row g-4">
                              {menuData[activeCategory].products.map((product) => (
                                <div key={product.id} className="col-lg-3">
                                  <Link
                                    href={`/products/${activeCategory}/${product.id}`}
                                    className="product-card text-decoration-none"
                                  >
                                    <div className="product-image mb-3">
                                      <Image
                                        src={product.image}
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link href="/case-studies" className="nav-link">
                Case Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/know-what" className="nav-link">
                Know What
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link contact">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MegaMenu

