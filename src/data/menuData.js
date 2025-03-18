// Centralized menu data structure with static links
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
              link: "https://www.pranaair.com/solutions-by-application/smart-city/", 
            },
            {
              id: "construction-sites",
              name: "Construction Sites",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/construction-sites.jpg",
              link: "/solutions/applications/construction-sites", 
            },
            {
              id: "institutes-schools",
              name: "Institutes | Schools",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/institutes-schools.jpg",
              link: "/solutions/applications/institutes-schools", 
            },
            {
              id: "air-quality-drone",
              name: "Air Quality Drone",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/air-quality-drone.jpg",
              link: "/solutions/applications/air-quality-drone", 
            },
            {
              id: "hotel-businesses",
              name: "Hotel Businesses",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/hotel-businesses.jpg",
              link: "/solutions/applications/hotel-businesses", 
            },
            {
              id: "restaurants",
              name: "Restaurants",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/restaurants.jpg",
              link: "/solutions/applications/restaurants", 
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
              link: "/solutions/industries/rmc-plants", 
            },
            {
              id: "fitness-center",
              name: "Fitness Center | GYM",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/fitness-center.jpg",
              link: "/solutions/industries/fitness-center", 
            },
            {
              id: "car-parking",
              name: "Car Parking Lot",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/car-parking.jpg",
              link: "/solutions/industries/car-parking", 
            },
            {
              id: "office",
              name: "Office",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/office.jpg",
              link: "/solutions/industries/office", 
            },
            {
              id: "retail-stores",
              name: "Retail Stores",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/retail-stores.jpg",
              link: "/solutions/industries/retail-stores", 
            },
            {
              id: "airports",
              name: "Airports",
              image: "https://www.pranaair.com/wp-content/uploads/2024/08/airports.jpg",
              link: "/solutions/industries/airports", 
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
                  link: "/products/air-quality-monitors/handheld/common-monitor", 
                },
                {
                  id: "pocket-co2",
                  name: "Pocket CO2",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                  link: "/products/air-quality-monitors/handheld/pocket-co2", 
                },
                {
                  id: "oxyco",
                  name: "OxyCO",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                  link: "/products/air-quality-monitors/handheld/oxyco", 
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
                  link: "/products/air-quality-monitors/indoor/indoor-pm25", 
                },
                {
                  id: "indoor-co2",
                  name: "Indoor CO2 Monitor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                  link: "/products/air-quality-monitors/indoor/indoor-co2", 
                },
                {
                  id: "indoor-multi",
                  name: "Indoor Multi-Parameter Monitor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Pocket-PM2.5.jpg",
                  link: "/products/air-quality-monitors/indoor/indoor-multi", 
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
                  link: "/products/air-quality-monitors/outdoor/outdoor-pm25", 
                },
                {
                  id: "outdoor-multi",
                  name: "Outdoor Multi-Parameter Station",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/09/prana-sense-monitor-1.webp",
                  link: "/products/air-quality-monitors/outdoor/outdoor-multi", 
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
                  link: "/products/air-quality-sensors/pm-sensor/outdoor-pm", 
                },
                {
                  id: "indoor-pm",
                  name: "Indoor PM",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/Indoor-PM-Sensors.jpg",
                  link: "/products/air-quality-sensors/pm-sensor/indoor-pm", 
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
                  link: "/products/air-quality-sensors/gas-sensor/co2-sensor", 
                },
                {
                  id: "co-sensor",
                  name: "CO Sensor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/CO-gas-sensor.jpg",
                  link: "/products/air-quality-sensors/gas-sensor/co-sensor", 
                },
                {
                  id: "tvoc-sensor",
                  name: "TVOC Sensor",
                  image: "https://www.pranaair.com/wp-content/uploads/2024/08/TVOC-gas-sensor.jpg",
                  link: "/products/air-quality-sensors/gas-sensor/tvoc-sensor", 
                },
              ],
            },
          },
        },
        "air-purifier": {
          name: "Air Purifier",
          icon: "💨",
          products: [
            {
              id: "nano-co",
              name: "Nano CO",
              image: "/placeholder.svg?height=200&width=200",
              link: "/products/air-purifier/nano-co", 
            },
            {
              id: "hepa-purifier",
              name: "HEPA Air Purifier",
              image: "/placeholder.svg?height=200&width=200",
              link: "/products/air-purifier/hepa-purifier", 
            },
          ],
        },
      },
    },
    "know-what": {
      name: "Know What",
      icon: "❓",
      items: [
        { id: "air-pollution", name: "What is Air Pollution?", icon: "🏭", link: "/know-what/air-pollution" },
        { id: "co", name: "What is CO?", icon: "🔄", link: "/know-what/co" },
        { id: "methane", name: "What is Methane?", icon: "💨", link: "/know-what/methane" },
        { id: "humidity", name: "What is Humidity?", icon: "💧", link: "/know-what/humidity" },
        { id: "no2", name: "What is NO2?", icon: "🌫️", link: "/know-what/no2" },
        { id: "ammonia", name: "What is Ammonia(NH3)?", icon: "🧪", link: "/know-what/ammonia" },
        { id: "so2", name: "What is SO2?", icon: "🌋", link: "/know-what/so2" },
        { id: "pm25", name: "What is PM2.5 | PM10?", icon: "🔬", link: "/know-what/pm25" },
        { id: "pollen", name: "What is Pollen?", icon: "🌼", link: "/know-what/pollen" },
        { id: "temperature", name: "What is Temperature?", icon: "🌡️", link: "/know-what/temperature" },
        { id: "h2s", name: "What is H2S?", icon: "☁️", link: "/know-what/h2s" },
        { id: "ozone", name: "What is Ozone?", icon: "🌐", link: "/know-what/ozone" },
        { id: "co2", name: "What is CO2?", icon: "🏭", link: "/know-what/co2" },
        { id: "vocs", name: "What is VOCs?", icon: "💨", link: "/know-what/vocs" },
        { id: "mold", name: "What is Mold?", icon: "🍄", link: "/know-what/mold" },
        { id: "radon", name: "What is Radon?", icon: "☢️", link: "/know-what/radon" },
        { id: "noise", name: "What is Noise?", icon: "🔊", link: "/know-what/noise" },
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
          link: "/case-studies/tata-steel", 
        },
        {
          id: "interglobe",
          name: "Prana Air Aided in Air Quality Monitoring Solutions for INTERGLOBE",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/interglobe-case-study.jpg",
          link: "/case-studies/interglobe", 
        },
        {
          id: "mahindra",
          name: "Prana Air helped Mahindra Lifespaces to monitor air pollution",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/mahindra-case-study.jpg",
          link: "/case-studies/mahindra", 
        },
        {
          id: "cii",
          name: "Prana Air helped CII to monitor air pollution",
          image: "https://www.pranaair.com/wp-content/uploads/2024/08/cii-case-study.jpg",
          link: "/case-studies/cii", 
        },
      ],
    },
    about: {
      name: "About",
      icon: "ℹ️",
      link: "/about", 
    },
  }
  
  export default menuData
  
  