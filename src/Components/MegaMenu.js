"use client"
import { useState, useEffect } from "react"
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
    customContent: true,
  },
  {
    name: "Weather Station",
    slug: "weather-station",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-weather-station-icon.png",
    subcategories: [],
    customContent: true,
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

// Solutions categories data - simplified structure without subcategories
const solutionsCategories = [
  {
    name: "For Applications",
    slug: "for-applications",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Quality-Monitors-icon.png",
    products: [
      {
        name: "Smart City Project",
        slug: "smart-city-project",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/smart-city-project.webp",
        url: "/solutions/for-applications/smart-city-project",
      },
      {
        name: "Constructions Sites",
        slug: "constructions-sites",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Constructions-Sites.jpg",
        url: "/solutions/for-applications/constructions-sites",
      },
      {
        name: "Institutes | Schools",
        slug: "institutes-schools",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Institutes-Schools.jpg",
        url: "/solutions/for-applications/institutes-schools",
      },
      {
        name: "Air Quality Drone",
        slug: "air-quality-drone",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Drone.jpg",
        url: "/solutions/for-applications/air-quality-drone",
      },
      {
        name: "Hotel Businesses",
        slug: "hotel-businesses",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Hotel-Business.jpg",
        url: "/solutions/for-applications/hotel-businesses",
      },
      {
        name: "Restaurants",
        slug: "restaurants",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Restaurants.jpg",
        url: "/solutions/for-applications/restaurants",
      },
      {
        name: "RMC Plants",
        slug: "rmc-plants",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/RMC-Plants.jpg",
        url: "/solutions/for-applications/rmc-plants",
      },
      {
        name: "Fitness Center | GYM",
        slug: "fitness-center-gym",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Fitness-Center-_-GYM.jpg",
        url: "/solutions/for-applications/fitness-center-gym",
      },
      {
        name: "Car Parking Lot",
        slug: "car-parking-lot",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Car-Parking-Lot.jpg",
        url: "/solutions/for-applications/car-parking-lot",
      },
      {
        name: "Office",
        slug: "office",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Office-area.jpg",
        url: "/solutions/for-applications/office",
      },
      {
        name: "Retail Stores",
        slug: "retail-stores",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Retail-Stores.jpg",
        url: "/solutions/for-applications/retail-stores",
      },
      {
        name: "Airports",
        slug: "airports",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/Airport.jpg",
        url: "/solutions/for-applications/airports",
      },
    ],
  },
  {
    name: "For Industries",
    slug: "for-industries",
    icon: "https://www.pranaair.com/wp-content/uploads/2024/08/Air-Quality-Sensors-icon.webp",
    products: [
      {
        name: "Automotive Industry",
        slug: "automotive-industry",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/automotive-industry.jpg",
        url: "/solutions/for-industries/automotive-industry",
      },
      {
        name: "Chemical Industry",
        slug: "chemical-industry",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/chemical-industry.jpg",
        url: "/solutions/for-industries/chemical-industry",
      },
      {
        name: "Textile Industry",
        slug: "textile-industry",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/textile-industry.jpg",
        url: "/solutions/for-industries/textile-industry",
      },
      {
        name: "Power Plants",
        slug: "power-plants",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/power-plants.jpg",
        url: "/solutions/for-industries/power-plants",
      },
      {
        name: "Oil & Gas",
        slug: "oil-gas",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/oil-gas.jpg",
        url: "/solutions/for-industries/oil-gas",
      },
      {
        name: "Mining Industry",
        slug: "mining-industry",
        image: "https://www.pranaair.com/wp-content/uploads/2024/08/mining-industry.jpg",
        url: "/solutions/for-industries/mining-industry",
      },
    ],
  },
]

// Know What articles data - simple flat structure
const knowWhatArticles = [
  {
    name: "What is Air Pollution?",
    slug: "what-is-air-pollution",
    icon: "🌫️",
    url: "/know-what/what-is-air-pollution",
  },
  {
    name: "What is Ammonia(NH3)?",
    slug: "what-is-ammonia-nh3",
    icon: "💨",
    url: "/know-what/what-is-ammonia-nh3",
  },
  {
    name: "What is H2S?",
    slug: "what-is-h2s",
    icon: "🥚",
    url: "/know-what/what-is-h2s",
  },
  {
    name: "What is Radon?",
    slug: "what-is-radon",
    icon: "☢️",
    url: "/know-what/what-is-radon",
  },
  {
    name: "What is CO?",
    slug: "what-is-co",
    icon: "☁️",
    url: "/know-what/what-is-co",
  },
  {
    name: "What is SO2?",
    slug: "what-is-so2",
    icon: "🏭",
    url: "/know-what/what-is-so2",
  },
  {
    name: "What is Ozone?",
    slug: "what-is-ozone",
    icon: "☀️",
    url: "/know-what/what-is-ozone",
  },
  {
    name: "What is Noise?",
    slug: "what-is-noise",
    icon: "🔊",
    url: "/know-what/what-is-noise",
  },
  {
    name: "What is Methane?",
    slug: "what-is-methane",
    icon: "🔥",
    url: "/know-what/what-is-methane",
  },
  {
    name: "What is PM2.5 | PM10?",
    slug: "what-is-pm2-5-pm10",
    icon: "🔬",
    url: "/know-what/what-is-pm2-5-pm10",
  },
  {
    name: "What is CO2?",
    slug: "what-is-co2",
    icon: "🌍",
    url: "/know-what/what-is-co2",
  },
  {
    name: "What is Humidity?",
    slug: "what-is-humidity",
    icon: "💧",
    url: "/know-what/what-is-humidity",
  },
  {
    name: "What is Pollen?",
    slug: "what-is-pollen",
    icon: "🌸",
    url: "/know-what/what-is-pollen",
  },
  {
    name: "What is VOCs?",
    slug: "what-is-vocs",
    icon: "🧪",
    url: "/know-what/what-is-vocs",
  },
  {
    name: "What is NO2?",
    slug: "what-is-no2",
    icon: "🚗",
    url: "/know-what/what-is-no2",
  },
  {
    name: "What is Temperature?",
    slug: "what-is-temperature",
    icon: "🌡️",
    url: "/know-what/what-is-temperature",
  },
  {
    name: "What is Mold?",
    slug: "what-is-mold",
    icon: "🍄",
    url: "/know-what/what-is-mold",
  },
]

// Pagination component
function PaginationControl({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
        aria-label="Previous page"
      >
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
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-md flex items-center justify-center ${currentPage === page ? "bg-green-600 text-white" : "border border-gray-300 bg-white text-gray-700"
            }`}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
        aria-label="Next page"
      >
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
      </button>
    </div>
  )
}

// PCB Mega Menu Content
function PCBMegaMenuContent({ onClose }) {
  return (
    <div className="empty-products-content">
      <Link href="/air-quality-pcb-board/">
        <Image
          src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-air-quality-PCBs-borads-2048x596.jpg"
          alt="Air Quality PCBs"
          width={800}
          height={233}
          className="w-full h-auto rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2">Air Quality PCBs</h3>
      </Link>
    </div>
  )
}

// Weather Station Mega Menu Content
function WeatherStationMegaMenuContent({ products, onClose, currentPage, setCurrentPage }) {
  const itemsPerPage = 7
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="products-container">
      <div className="empty-products-content">
        <Link href="/air-quality-monitor/weather-station/">
          <Image
            src="https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-Weather-station-Measure-weather-data-with-air-quality-2048x594.jpg"
            alt="Weather Station"
            width={800}
            height={233}
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4 mb-2">Weather Station</h3>
        </Link>
      </div>

      {totalPages > 1 && (
        <PaginationControl currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}

export function MegaMenu({ onClose, menuType = "products" }) {
  // Use the appropriate categories based on menuType
  const categoriesData = menuType === "products" ? categories : solutionsCategories

  const [activeCategory, setActiveCategory] = useState(categoriesData[0]?.slug || "")
  const [activeSubcategory, setActiveSubcategory] = useState(categoriesData[0]?.subcategories?.[0]?.slug || "")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const selectedCategory = categoriesData.find((cat) => cat.slug === activeCategory)
  const selectedSubcategory = selectedCategory?.subcategories?.find((sub) => sub.slug === activeSubcategory)

  // Reset page when category or subcategory changes
  const handleCategoryChange = (categorySlug) => {
    if (activeCategory !== categorySlug) {
      setCurrentPage(1)
      setActiveCategory(categorySlug)
      const category = categoriesData.find((cat) => cat.slug === categorySlug)
      if (category?.subcategories?.length > 0) {
        setActiveSubcategory(category.subcategories[0].slug)
      } else {
        setActiveSubcategory("")
      }
    }
  }

  const handleSubcategoryChange = (subcategorySlug) => {
    if (activeSubcategory !== subcategorySlug) {
      setCurrentPage(1)
      setActiveSubcategory(subcategorySlug)
    }
  }

  return (
    <div className="mega-menu-wrapper">
      <div className="mega-menu-flex">
        {/* Categories Column */}
        <div className="categories-sidebar">
          {categoriesData.map((category) => (
            <button
              key={category.slug}
              className={`category-button ${activeCategory === category.slug ? "active" : ""}`}
              onMouseEnter={() => handleCategoryChange(category.slug)}
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
              {((menuType === "products" && category.subcategories && category.subcategories.length > 0) ||
                (menuType === "solutions" && category.products && category.products.length > 0)) && (
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

        {/* Subcategories Column - Only for Products */}
        {menuType === "products" && selectedCategory?.subcategories && selectedCategory.subcategories.length > 0 && (
          <div className="subcategories-sidebar">
            {selectedCategory.subcategories.map((subcategory) => (
              <button
                key={subcategory.slug}
                className={`subcategory-button ${activeSubcategory === subcategory.slug ? "active" : ""}`}
                onMouseEnter={() => handleSubcategoryChange(subcategory.slug)}
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
          {/* PCB Custom Content */}
          {selectedCategory?.slug === "air-quality-pcb" && menuType === "products" ? (
            <div className="empty-products">
              <PCBMegaMenuContent onClose={onClose} />
            </div>
          ) : /* Weather Station Custom Content */
            selectedCategory?.slug === "weather-station" && menuType === "products" ? (
              <WeatherStationMegaMenuContent
                products={selectedCategory.products || []}
                onClose={onClose}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : /* Solutions - Direct Products Grid */
              menuType === "solutions" && selectedCategory?.products && selectedCategory.products.length > 0 ? (
                <>
                  <div className="products-grid">
                    {selectedCategory.products
                      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                      .map((product) => (
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

                  {selectedCategory.products.length > itemsPerPage && (
                    <PaginationControl
                      currentPage={currentPage}
                      totalPages={Math.ceil(selectedCategory.products.length / itemsPerPage)}
                      onPageChange={setCurrentPage}
                    />
                  )}

                  <div className="products-header">
                    <Link href={`/solutions/${selectedCategory.slug}`} className="view-all-products" onClick={onClose}>
                      View all {selectedCategory.name === "For Applications" ? "Applications" : "Industries"}
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
                </>
              ) : /* Products - Regular Products Grid */
                selectedSubcategory?.products && selectedSubcategory.products.length > 0 ? (
                  <>
                    <div className="products-grid">
                      {selectedSubcategory.products
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((product) => (
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

                    {selectedSubcategory.products.length > itemsPerPage && (
                      <PaginationControl
                        currentPage={currentPage}
                        totalPages={Math.ceil(selectedSubcategory.products.length / itemsPerPage)}
                        onPageChange={setCurrentPage}
                      />
                    )}

                    <div className="products-header">
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
                  </>
                ) : (
                  <div className="empty-products">
                    <div className="empty-products-content">
                      <Link href={`/${menuType === "products" ? selectedCategory?.slug : "solutions"}`}>
                        <Image
                          src={
                            menuType === "products"
                              ? "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-air-quality-PCBs-borads-2048x596.jpg"
                              : "https://www.pranaair.com/wp-content/uploads/2024/08/pranaair-solutions-banner.jpg"
                          }
                          alt=""
                          width={800}
                          height={233}
                          className="w-full h-auto rounded-lg"
                        />
                        <h5 className="mt-4 text-xl font-semibold">{selectedCategory?.name}</h5>
                      </Link>
                    </div>
                  </div>
                )}
        </div>
      </div>
    </div>
  )
}

// Simple Know What Mega Menu - No categories, just articles grid
export function KnowWhatMegaMenu({ onClose }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 17

  const totalPages = Math.ceil(knowWhatArticles.length / itemsPerPage)
  const displayedArticles = knowWhatArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div
      className="know-what-mega-menu"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: "white",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
        padding: "24px",
      }}
    >
      <div
        className="know-what-articles-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        {displayedArticles.map((article) => (
          <Link
            key={article.slug}
            href={article.url}
            className="know-what-article-card"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#374151",
              transition: "all 0.2s ease",
              backgroundColor: "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f9fafb"
              e.target.style.borderColor = "#7ab261"
              e.target.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white"
              e.target.style.borderColor = "#e5e7eb"
              e.target.style.transform = "translateY(0)"
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "12px" }}>{article.icon}</span>
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.4" }}>{article.name}</span>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControl currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}

// About Us Mega Menu with dynamic blogs
export function AboutUsMegaMenu({ onClose }) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://www.pranaair.com/wp-json/wp/v2/posts?_embed&per_page=4")
        const data = await response.json()
        setBlogs(data)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const stripHtml = (html) => {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  return (
    <div
      className="about-us-mega-menu"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: "white",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
        padding: "32px",
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "48px"
      }}
    >
      {/* Blogs Section */}
      <div className="blogs-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#1f2937",
              margin: 0,
            }}
          >
            Blogs
          </h3>
          <Link
            href="/blogs"
            onClick={onClose}
            style={{
              color: "#7ab261",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            See All Blogs
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

        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",
              color: "#6b7280",
            }}
          >
            Loading blogs...
          </div>
        ) : (
          <div style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(2, 1fr)"
          }}>
            {blogs.map((blog) => {
              const featuredImage = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url
              const excerpt = stripHtml(blog.excerpt.rendered).substring(0, 150) + "..."

              return (
                <Link
                  key={blog.id}
                  href={blog.link}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    gap: "16px",
                    textDecoration: "none",
                    color: "inherit",
                    padding: "16px",
                    borderRadius: "8px",
                    flexDirection: "column",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  <div
                    style={{
                      width: "500px",
                      height: "auto",
                      borderRadius: "6px",
                      overflow: "hidden",
                      flexShrink: 0,
                      backgroundColor: "#f3f4f6",
                    }}
                  >
                    <Image
                      src={featuredImage || "/placeholder.svg?height=80&width=120&query=blog post"}
                      alt={stripHtml(blog.title.rendered)}
                      width={120}
                      height={80}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: "0 0 8px 0",
                        lineHeight: "1.4",
                      }}
                    >
                      {stripHtml(blog.title.rendered)}
                    </h4>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                      }}
                    >
                      {formatDate(blog.date)}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            padding: "32px",
            height: "fit-content",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2024/08/prana-air-logo.webp"
              alt="Prana Air"
              width={140}
              height={100}
              style={{ marginBottom: "16px" }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7ab261"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                  706, 7th Floor, Crown Heights, Rohini Sec-10, Delhi 110085, INDIA
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7ab261"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div style={{ fontSize: "14px", color: "#1f2937" }}>info@purelogic.in</div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7ab261"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div style={{ fontSize: "14px", color: "#1f2937" }}>+91 73918 73918</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              href="/contact"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                backgroundColor: "#7ab261",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#6ba055"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#7ab261"
              }}
            >
              Contact Us
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

            <Link
              href="/support"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                backgroundColor: "white",
                color: "#7ab261",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #7ab261",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f9ff"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white"
              }}
            >
              Support Desk
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
      </div>
    </div>
  )
}

// Case Studies Mega Menu with dynamic case studies
export function CaseStudiesMegaMenu({ onClose }) {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        // Fetch case studies from category 193
        const response = await fetch("https://www.pranaair.com/wp-json/wp/v2/posts?_embed&categories=193&per_page=20")
        const data = await response.json()
        setCaseStudies(data)
      } catch (error) {
        console.error("Error fetching case studies:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCaseStudies()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const stripHtml = (html) => {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

  const totalPages = Math.ceil(caseStudies.length / itemsPerPage)
  const displayedCaseStudies = caseStudies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div
      className="case-studies-mega-menu"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        backgroundColor: "white",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
        padding: "32px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#1f2937",
            margin: 0,
          }}
        >
          Case Studies
        </h3>
        <Link
          href="https://www.pranaair.com/category/case-studies/"
          onClick={onClose}
          style={{
            color: "#7ab261",
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          View All Case Studies
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

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            color: "#6b7280",
          }}
        >
          Loading case studies...
        </div>
      ) : (
        <>
          {/* Case Studies Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {displayedCaseStudies.map((caseStudy) => {
              const featuredImage = caseStudy._embedded?.["wp:featuredmedia"]?.[0]?.source_url
              const excerpt = stripHtml(caseStudy.excerpt.rendered).substring(0, 120) + "..."

              return (
                <Link
                  key={caseStudy.id}
                  href={caseStudy.link}
                  onClick={onClose}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-4px)"
                    e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)"
                    e.target.style.borderColor = "#7ab261"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)"
                    e.target.style.borderColor = "#e5e7eb"
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f3f4f6",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={featuredImage || "/placeholder.svg?height=200&width=350&query=case study"}
                      alt={stripHtml(caseStudy.title.rendered)}
                      width={350}
                      height={200}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1f2937",
                        margin: "0 0 12px 0",
                        lineHeight: "1.4",
                      }}
                    >
                      {stripHtml(caseStudy.title.rendered)}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                        }}
                      >
                        {formatDate(caseStudy.date)}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#7ab261",
                          fontWeight: "500",
                        }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
                aria-label="Previous page"
              >
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-md flex items-center justify-center ${currentPage === page ? "bg-green-600 text-white" : "border border-gray-300 bg-white text-gray-700"
                    }`}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
                aria-label="Next page"
              >
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
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
// Export for Solutions mega menu
export function SolutionsMegaMenu({ onClose }) {
  return <MegaMenu onClose={onClose} menuType="solutions" />
}
