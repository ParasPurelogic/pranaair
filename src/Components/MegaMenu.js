"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Product categories data based on the provided list
const categories = [
  {
    name: "Air Quality Monitors",
    slug: "air-quality-monitor",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Quality-Monitors-icon.png",
    subcategories: [
      {
        name: "Handheld",
        slug: "handheld",
        icon: "https://www.pranaair.com/wp-content/uploads/2024/09/handled.png",
        products: [
          {
            name: "Pocket PM2.5",
            slug: "pocket-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
            url: "/air-quality-monitor/handheld/pocket-monitor",
          },
          {
            name: "Pocket CO2",
            slug: "pocket-co2-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-CO2.jpg",
            url: "/air-quality-monitor/pocket-co2-monitor",
          },
          {
            name: "Nano CO",
            slug: "nano-co-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Nano-CO.jpg",
            url: "/air-quality-monitor/handheld/nano-co-monitor",
          },
          {
            name: "Nano CO2",
            slug: "nano-co2-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Nano-CO2.jpg",
            url: "/air-quality-monitor/handheld/nano-co2-monitor",
          },
          {
            name: "Nano TVOC",
            slug: "nano-tvoc-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Nano-TVOC.jpg",
            url: "/air-quality-monitor/handheld/nano-tvoc-monitor",
          },
          
          {
            name: "Oxygen Monitor",
            slug: "oxygen-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/12/prana-air-oxygen-monitor-oxyco.webp",
            url: "/air-quality-monitor/oxygen-monitor",
          },
          {
            name: "Breathalyzer",
            slug: "breathalyzer",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Breathalyzer.jpg",
            url: "/breathalyzer",
          },
        ],
      },
      {
        name: "Indoor",
        slug: "indoor",
        icon: "https://www.pranaair.com/wp-content/uploads/2024/09/Indoor.png",
        products: [
          {
            name: "Cair Monitor",
            slug: "cair-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/CAIR.jpg",
            url: "/air-quality-monitor/cair-monitor",
          },
          {
            name: "Squair Air Monitor",
            slug: "squair-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/SQUAIR.jpg",
            url: "/air-quality-monitor/squair-air-monitor",
          },
          {
            name: "Sensible Air Monitor",
            slug: "sensible-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Sensible.jpg",
            url: "/air-quality-monitor/sensible-air-monitor",
          },
          {
            name: "Sensible Plus Air Monitor",
            slug: "sensible-plus-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Sensible-.jpg",
            url: "/air-quality-monitor/sensible-plus-air-monitor",
          },
          {
            name: "Rental",
            slug: "rental",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Rental.jpg",
            url: "/air-quality-monitor/rental-air-monitor/",
          },
        ],
      },
      {
        name: "Outdoor",
        slug: "outdoor",
        icon: "https://www.pranaair.com/wp-content/uploads/2024/09/Outdoor.png",
        products: [
          {
            name: "Air Drone",
            slug: "air-drone",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Drones.jpg",
            url: "/air-quality-monitor/air-drone",
          },
          {
            name: "Ambient Air Monitor",
            slug: "ambient-air-monitor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/ambient-pm.jpg",
            url: "/air-quality-monitor/ambient-air-monitor",
          },
          {
            name: "Prana Sense",
            slug: "prana-sense",
            image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp",
            url: "/air-quality-monitor/ambient-air-monitor/prana-sense",
          },
        ],
      },
    ],
  },
  {
    name: "Air Quality Sensors",
    slug: "air-quality-sensor",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Quality-Sensors-icon.webp",
    subcategories: [
      {
        name: "PM Sensors",
        slug: "pm-sensors",
        icon: "https://www.pranaair.com/wp-content/uploads/2024/08/pm-sensor-icon.webp",
        products: [
          {
            name: "Outdoor PM Sensor",
            slug: "outdoor-pm-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Outdoor-PM-Sensors.jpg",
            url: "/air-quality-sensor/outdoor-pm-sensor",
          },
          {
            name: "Indoor PM Sensor",
            slug: "indoor-pm-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Indoor-PM-Sensors.jpg",
            url: "/air-quality-sensor/indoor-pm-sensor",
          },
        ],
      },
      {
        name: "Gas Sensors",
        slug: "gas-sensors",
        icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Gas-Sensors-icon.webp",
        products: [
          {
            name: "Hydrogen Sulfide (H2S) Sensor",
            slug: "hydrogen-sulfide-h2s-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/H2S-gas-sensor.jpg",
            url: "/air-quality-sensor/hydrogen-sulfide-h2s-sensor",
          },
          {
            name: "Ethanol (EtOH) Sensor",
            slug: "ethanol-etoh-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Ethanol-gas-Sensor.jpg",
            url: "/air-quality-sensor/ethanol-etoh-sensor",
          },
          {
            name: "Chlorine (Cl2) Sensor",
            slug: "chlorine-cl2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Chlorine-gas-sensor.jpg",
            url: "/air-quality-sensor/chlorine-cl2-sensor",
          },
          {
            name: "Nitrogen Dioxide (NO2) Sensor",
            slug: "nitrogen-dioxide-no2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/No2-gas-sensor.jpg",
            url: "/air-quality-sensor/nitrogen-dioxide-no2-sensor",
          },
          {
            name: "Carbon Dioxide (CO2) Sensor",
            slug: "carbon-dioxide-co2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/CO2-gas-sensor.jpg",
            url: "/air-quality-sensor/carbon-dioxide-co2-sensor",
          },
          {
            name: "Ozone (O3) Sensor",
            slug: "ozone-o3-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Ozone-gas-sensor.jpg",
            url: "/air-quality-sensor/ozone-o3-sensor",
          },
          {
            name: "Ammonia (NH3) Sensor",
            slug: "ammonia-nh3-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Ammonia-gas-sensor.jpg",
            url: "/air-quality-sensor/ammonia-nh3-sensor",
          },
          {
            name: "Sulfur Dioxide (SO2) Sensor",
            slug: "sulfur-dioxide-so2-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/SO2-gas-sensor.jpg",
            url: "/air-quality-sensor/sulfur-dioxide-so2-sensor",
          },
          {
            name: "Carbon Monoxide (CO) Sensor",
            slug: "carbon-monoxide-co-sensor",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg",
            url: "/air-quality-sensor/carbon-monoxide-co-sensor",
          },
        ],
      },
    ],
  },
  {
    name: "Air Quality PCB's",
    slug: "air-quality-pcb",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Quality-PCBs-icon.webp",
    subcategories: [],

  },
  {
    name: "Weather Station",
    slug: "weather-station",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-weather-station-icon.png",
    subcategories: [],
  },
  {
    name: "Air Purifier",
    slug: "air-purifier",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Purifier-icon.webp",
    subcategories: [
      {
        name: "Air Sanitizer",
        slug: "air-sanitizer",
        products: [
          {
            name: "Air Sanitizer",
            slug: "air-sanitizer",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Sanitiser.jpg",
            url: "/air-sanitizer",
          },
        ],
      },
      {
        name: "Fresh Air Machine",
        slug: "fresh-air-machine",
        products: [
          {
            name: "Fresh Air Machine",
            slug: "fresh-air-machine",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Fresh-Air-Machines.jpg",
            url: "/fresh-air-machine",
          },
        ],
      },
      {
        name: "Outdoor Air Purifier",
        slug: "outdoor-air-purifier",
        products: [
          {
            name: "Outdoor Air Purifier",
            slug: "outdoor-air-purifier",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Outdoors-Air-Purifier.jpg",
            url: "/outdoor-air-purifier",
          },
        ],
      },
    ],
  },
  {
    name: "Anti-Pollution Masks",
    slug: "anti-pollution-mask",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Pollution-Mask-icon.webp",
    subcategories: [
      {
        name: "2nd Gen Mask",
        slug: "2nd-gen-mask",
        icon: "/icons/mask.svg",
        products: [
          {
            name: "2nd Gen Mask",
            slug: "2nd-gen-mask",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Air-Mask-N95.jpg",
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
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Adult-Kid-Pollution-Mask.jpg",
            url: "/anti-pollution-mask/adult-kid-mask",
          },
        ],
      },
    ],
  },
  {
    name: "Air Filters",
    slug: "air-filter",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Filters-icon.webp",
    subcategories: [
      {
        name: "Car Cabin Air Filter",
        slug: "car-cabin-air-filter",
        products: [
          {
            name: "Car Cabin Air Filter",
            slug: "car-cabin-air-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/car-air-cabin-filter.jpg",
            url: "/air-filter/car-cabin-air-filter",
          },
        ],
      },
      {
        name: "Air Purifier Filter",
        slug: "air-purifier-filter",
        products: [
          {
            name: "Air Purifier Filter",
            slug: "air-purifier-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Purifier-Filter.jpg",
            url: "/air-filter/air-purifier-filter",
          },
        ],
      },
      {
        name: "Room AC Filter",
        slug: "room-ac-filter",
        products: [
          {
            name: "Room AC Filter",
            slug: "room-ac-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Room-AC-filter.jpg",
            url: "/air-filter/room-ac-filter",
          },
        ],
      },
      {
        name: "2nd Gen Mask Filter",
        slug: "2nd-gen-mask-filter",
        products: [
          {
            name: "2nd Gen Mask Filter",
            slug: "2nd-gen-mask-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/2nd-Gen-Mask-Filter.jpg",
            url: "/air-filter/2nd-gen-mask-filter",
          },
        ],
      },
      {
        name: "Motion Mask Filter",
        slug: "motion-mask-filter",
        products: [
          {
            name: "Motion Mask Filter",
            slug: "motion-mask-filter",
            image: "https://www.pranaair.com/wp-content/uploads/2024/08/Motion-Mask-Filter.jpg",
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
                <div className="products-header">
                <Link
                  href="air-quality-monitor/"
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
              </div>
            </>
          ) : (
            <div className="empty-products">
              <div className="empty-products-content">
                <Link href="#">
              <Image
                  src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-air-quality-PCBs-borads-2048x596.jpg"
                  alt=""
                  width={24}
                  height={24}
                  className="category-icon"
                />
                <h5>Air Quality PCBs</h5>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

