"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Product categories data based on the provided list
const categories = [
  {
    name: "Air Quality Monitors",
    slug: "air-quality-monitor",
    icon: "/icons/monitor.svg",
    subcategories: [
      {
        name: "Handheld",
        slug: "handheld",
        icon: "/icons/handheld.svg",
        products: [
          {
            name: "Pocket PM2.5",
            slug: "pocket-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/pocket-pm25.jpg",
            url: "/air-quality-monitor/handheld/pocket-monitor",
          },
          {
            name: "Nano CO",
            slug: "nano-co-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-co.jpg",
            url: "/air-quality-monitor/handheld/nano-co-monitor",
          },
          {
            name: "Nano CO2",
            slug: "nano-co2-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-co2.jpg",
            url: "/air-quality-monitor/handheld/nano-co2-monitor",
          },
          {
            name: "Nano TVOC",
            slug: "nano-tvoc-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/nano-tvoc.jpg",
            url: "/air-quality-monitor/handheld/nano-tvoc-monitor",
          },
          {
            name: "Pocket CO2",
            slug: "pocket-co2-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/pocket-co2.jpg",
            url: "/air-quality-monitor/pocket-co2-monitor",
          },
          {
            name: "Oxygen Monitor",
            slug: "oxygen-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/oxyco.jpg",
            url: "/air-quality-monitor/oxygen-monitor",
          },
        ],
      },
      {
        name: "Indoor",
        slug: "indoor",
        icon: "/icons/indoor.svg",
        products: [
          {
            name: "Cair Monitor",
            slug: "cair-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/cair-monitor.jpg",
            url: "/air-quality-monitor/cair-monitor",
          },
          {
            name: "Squair Air Monitor",
            slug: "squair-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/squair-monitor.jpg",
            url: "/air-quality-monitor/squair-air-monitor",
          },
          {
            name: "Sensible Air Monitor",
            slug: "sensible-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/sensible-monitor.jpg",
            url: "/air-quality-monitor/sensible-air-monitor",
          },
          {
            name: "Sensible Plus Air Monitor",
            slug: "sensible-plus-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/sensible-plus-monitor.jpg",
            url: "/air-quality-monitor/sensible-plus-air-monitor",
          },
        ],
      },
      {
        name: "Outdoor",
        slug: "outdoor",
        icon: "/icons/outdoor.svg",
        products: [
          {
            name: "Air Drone",
            slug: "air-drone",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/air-drone.jpg",
            url: "/air-quality-monitor/air-drone",
          },
          {
            name: "Weather Station",
            slug: "weather-station",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/weather-station.jpg",
            url: "/air-quality-monitor/weather-station",
          },
          {
            name: "Ambient Air Monitor",
            slug: "ambient-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/ambient-monitor.jpg",
            url: "/air-quality-monitor/ambient-air-monitor",
          },
          {
            name: "Prana Sense",
            slug: "prana-sense",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/prana-sense.jpg",
            url: "/air-quality-monitor/ambient-air-monitor/prana-sense",
          },
          {
            name: "Rental Air Monitor",
            slug: "rental-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/rental-monitor.jpg",
            url: "/air-quality-monitor/rental-air-monitor",
          },
        ],
      },
    ],
  },
  {
    name: "Air Quality Sensors",
    slug: "air-quality-sensor",
    icon: "/icons/sensor.svg",
    subcategories: [
      {
        name: "PM Sensors",
        slug: "pm-sensors",
        icon: "/icons/pm-sensor.svg",
        products: [
          {
            name: "Outdoor PM Sensor",
            slug: "outdoor-pm-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-pm-sensor.jpg",
            url: "/air-quality-sensor/outdoor-pm-sensor",
          },
          {
            name: "Indoor PM Sensor",
            slug: "indoor-pm-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/indoor-pm-sensor.jpg",
            url: "/air-quality-sensor/indoor-pm-sensor",
          },
        ],
      },
      {
        name: "Gas Sensors",
        slug: "gas-sensors",
        icon: "/icons/gas-sensor.svg",
        products: [
          {
            name: "Hydrogen Sulfide (H2S) Sensor",
            slug: "hydrogen-sulfide-h2s-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/h2s-sensor.jpg",
            url: "/air-quality-sensor/hydrogen-sulfide-h2s-sensor",
          },
          {
            name: "Ethanol (EtOH) Sensor",
            slug: "ethanol-etoh-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/etoh-sensor.jpg",
            url: "/air-quality-sensor/ethanol-etoh-sensor",
          },
          {
            name: "Chlorine (Cl2) Sensor",
            slug: "chlorine-cl2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/cl2-sensor.jpg",
            url: "/air-quality-sensor/chlorine-cl2-sensor",
          },
          {
            name: "Nitrogen Dioxide (NO2) Sensor",
            slug: "nitrogen-dioxide-no2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/no2-sensor.jpg",
            url: "/air-quality-sensor/nitrogen-dioxide-no2-sensor",
          },
          {
            name: "Carbon Dioxide (CO2) Sensor",
            slug: "carbon-dioxide-co2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/co2-sensor.jpg",
            url: "/air-quality-sensor/carbon-dioxide-co2-sensor",
          },
          {
            name: "Ozone (O3) Sensor",
            slug: "ozone-o3-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/o3-sensor.jpg",
            url: "/air-quality-sensor/ozone-o3-sensor",
          },
          {
            name: "Ammonia (NH3) Sensor",
            slug: "ammonia-nh3-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/nh3-sensor.jpg",
            url: "/air-quality-sensor/ammonia-nh3-sensor",
          },
          {
            name: "Sulfur Dioxide (SO2) Sensor",
            slug: "sulfur-dioxide-so2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/so2-sensor.jpg",
            url: "/air-quality-sensor/sulfur-dioxide-so2-sensor",
          },
          {
            name: "Carbon Monoxide (CO) Sensor",
            slug: "carbon-monoxide-co-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/co-sensor.jpg",
            url: "/air-quality-sensor/carbon-monoxide-co-sensor",
          },
        ],
      },
    ],
  },
  {
    name: "Air Quality PCB's",
    slug: "air-quality-pcb",
    icon: "/icons/pcb.svg",
    subcategories: [],
  },
  {
    name: "Weather Station",
    slug: "weather-station",
    icon: "/icons/weather.svg",
    subcategories: [],
  },
  {
    name: "Air Purifier",
    slug: "air-purifier",
    icon: "/icons/purifier.svg",
    subcategories: [
      {
        name: "Wearable Air Purifier",
        slug: "wearable-air-purifier",
        icon: "/icons/wearable.svg",
        products: [
          {
            name: "Wearable Air Purifier",
            slug: "wearable-air-purifier",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/wearable-purifier.jpg",
            url: "/wearable-air-purifier",
          },
        ],
      },
      {
        name: "Air Sanitizer",
        slug: "air-sanitizer",
        icon: "/icons/sanitizer.svg",
        products: [
          {
            name: "Air Sanitizer",
            slug: "air-sanitizer",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/air-sanitizer.jpg",
            url: "/air-sanitizer",
          },
        ],
      },
      {
        name: "Fresh Air Machine",
        slug: "fresh-air-machine",
        icon: "/icons/fresh-air.svg",
        products: [
          {
            name: "Fresh Air Machine",
            slug: "fresh-air-machine",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/fresh-air-machine.jpg",
            url: "/fresh-air-machine",
          },
        ],
      },
      {
        name: "Outdoor Air Purifier",
        slug: "outdoor-air-purifier",
        icon: "/icons/outdoor-purifier.svg",
        products: [
          {
            name: "Outdoor Air Purifier",
            slug: "outdoor-air-purifier",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/outdoor-purifier.jpg",
            url: "/outdoor-air-purifier",
          },
        ],
      },
    ],
  },
  {
    name: "Anti-Pollution Masks",
    slug: "anti-pollution-mask",
    icon: "/icons/mask.svg",
    subcategories: [
      {
        name: "2nd Gen Mask",
        slug: "2nd-gen-mask",
        icon: "/icons/mask.svg",
        products: [
          {
            name: "2nd Gen Mask",
            slug: "2nd-gen-mask",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/2nd-gen-mask.jpg",
            url: "/anti-pollution-mask/2nd-gen-mask",
          },
        ],
      },
      {
        name: "Adult-Kid Mask",
        slug: "adult-kid-mask",
        icon: "/icons/kids-mask.svg",
        products: [
          {
            name: "Adult-Kid Mask",
            slug: "adult-kid-mask",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/adult-kid-mask.jpg",
            url: "/anti-pollution-mask/adult-kid-mask",
          },
        ],
      },
    ],
  },
  {
    name: "Air Filters",
    slug: "air-filter",
    icon: "/icons/filter.svg",
    subcategories: [
      {
        name: "Car Cabin Air Filter",
        slug: "car-cabin-air-filter",
        icon: "/icons/car-filter.svg",
        products: [
          {
            name: "Car Cabin Air Filter",
            slug: "car-cabin-air-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/car-filter.jpg",
            url: "/air-filter/car-cabin-air-filter",
          },
        ],
      },
      {
        name: "Air Purifier Filter",
        slug: "air-purifier-filter",
        icon: "/icons/purifier-filter.svg",
        products: [
          {
            name: "Air Purifier Filter",
            slug: "air-purifier-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/purifier-filter.jpg",
            url: "/air-filter/air-purifier-filter",
          },
        ],
      },
      {
        name: "Room AC Filter",
        slug: "room-ac-filter",
        icon: "/icons/ac-filter.svg",
        products: [
          {
            name: "Room AC Filter",
            slug: "room-ac-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/ac-filter.jpg",
            url: "/air-filter/room-ac-filter",
          },
        ],
      },
      {
        name: "2nd Gen Mask Filter",
        slug: "2nd-gen-mask-filter",
        icon: "/icons/mask-filter.svg",
        products: [
          {
            name: "2nd Gen Mask Filter",
            slug: "2nd-gen-mask-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/2nd-gen-filter.jpg",
            url: "/air-filter/2nd-gen-mask-filter",
          },
        ],
      },
      {
        name: "Motion Mask Filter",
        slug: "motion-mask-filter",
        icon: "/icons/motion-filter.svg",
        products: [
          {
            name: "Motion Mask Filter",
            slug: "motion-mask-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/01/motion-filter.jpg",
            url: "/air-filter/motion-mask-filter",
          },
        ],
      },
    ],
  },
]

export function MegaMenu({ onClose }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug || "")
  const [activeSubcategory, setActiveSubcategory] = useState(categories[0]?.subcategories?.[0]?.slug || "")

  const selectedCategory = categories.find((cat) => cat.slug === activeCategory)
  const selectedSubcategory = selectedCategory?.subcategories?.find((sub) => sub.slug === activeSubcategory)

  return (
    <div className="mega-menu-wrapper">
      <div className="mega-menu-flex">
        {/* Categories Column */}
        <div className="categories-sidebar">
          {categories.map((category) => (
            <button
              key={category.slug}
              className={`category-button ${activeCategory === category.slug ? "active" : ""}`}
              onMouseEnter={() => {
                setActiveCategory(category.slug)
                if (category.subcategories?.length > 0) {
                  setActiveSubcategory(category.subcategories[0].slug)
                } else {
                  setActiveSubcategory("")
                }
              }}
            >
              <span className="category-icon-wrapper">
                <Image
                  src={category.icon || "/placeholder.svg?height=24&width=24"}
                  alt=""
                  width={24}
                  height={24}
                  className="category-icon"
                />
              </span>
              {category.name}
              {category.subcategories && category.subcategories.length > 0 && (
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
                  style={{ marginLeft: "auto" }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Subcategories Column */}
        {selectedCategory?.subcategories && selectedCategory.subcategories.length > 0 && (
          <div className="subcategories-sidebar">
            {selectedCategory.subcategories.map((subcategory) => (
              <button
                key={subcategory.slug}
                className={`subcategory-button ${activeSubcategory === subcategory.slug ? "active" : ""}`}
                onMouseEnter={() => setActiveSubcategory(subcategory.slug)}
              >
                {subcategory.icon && (
                  <Image
                    src={subcategory.icon || "/placeholder.svg?height=20&width=20"}
                    alt=""
                    width={20}
                    height={20}
                    style={{ opacity: 0.75 }}
                  />
                )}
                {subcategory.name}
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
                  style={{ marginLeft: "auto" }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="products-grid-container">
          {selectedSubcategory?.products && selectedSubcategory.products.length > 0 ? (
            <>
              <div className="products-header">
                <h3 className="products-title">{selectedSubcategory.name}</h3>
                <Link
                  href={`/${selectedCategory?.slug}/${selectedSubcategory.slug}`}
                  className="view-all-products"
                  onClick={onClose}
                >
                  View All {selectedSubcategory.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
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
              </div>
              <div className="products-grid">
                {selectedSubcategory.products.map((product) => (
                  <Link key={product.slug} href={product.url} className="product-card" onClick={onClose}>
                    <div className="product-image-container">
                      <Image
                        src={product.image || "/placeholder.svg?height=200&width=200"}
                        alt={product.name}
                        fill
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-products">
              <div className="empty-products-content">
                <h3 className="empty-products-title">{selectedCategory?.name}</h3>
                <p className="empty-products-text">Explore our range of {selectedCategory?.name.toLowerCase()}</p>
                <Link href={`/${selectedCategory?.slug}`} className="browse-products-button" onClick={onClose}>
                  Browse Products
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

