"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import menuData from "@/data/menuData" // Import the centralized menu data

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubCategory, setActiveSubCategory] = useState(null)
  const [activeSubSubCategory, setActiveSubSubCategory] = useState(null)

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

  // Render solutions menu content
  const renderSolutionsContent = () => {
    if (activeCategory === "solutions" && menuData.solutions.subcategories) {
      const subcategory = menuData.solutions.subcategories[activeSubCategory]
      if (subcategory && subcategory.items) {
        return (
          <div className="row g-4 p-4">
            {subcategory.items.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                <a href={item.link} className="text-decoration-none">
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
                </a>
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
                <Link href={item.link} className="text-decoration-none text-dark">
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
                <Link href={item.link} className="text-decoration-none">
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
                      <Link href={product.link} className="product-card text-decoration-none">
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
                    <Link href={product.link} className="product-card text-decoration-none">
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
              <Link href={menuData.about.link} className="nav-link">
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

