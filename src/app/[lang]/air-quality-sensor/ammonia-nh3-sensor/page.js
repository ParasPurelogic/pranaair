import SensorPageTemplate from "@/Components/Pages/SensorPage/sensor-page-template"

export default function NO2SensorPage() {
    const sensorData = {
        sensorName: "Ammonia NH3 Sensor ",
        sensorType: "Ammonia NH3 Sensor ",
        pageName: "Ammonia NH3 Sensor Page",

        productImages: {
            main: ["/img/ammonia-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
            thumbnails: ["/img/ammonia-sensor.webp", "/img/new-sensor1.webp", "/img/new-sensor2.webp"],
        },

        variants: {
            standard: {
                ppm: "0-20 PPM",
                price: "$249",
                image: "/img/so2-sensor.webp",
            },
            premium: {
                ppm: "0-100 PPM",
                price: "$349",
                image: "/img/sensor.png",
            },
        },

        description:
            "Prana Air SO2 sensor is made with precision and fineness for both industrial-grade and consumer-grade safety monitoring. The sensor is based on electrochemical technology for highly toxic SO2 gas. ",
        descriptions:
            "eeeeeeeeeeeeeeeeeeeee ",

        introduction: {
            title: "Introduction",
            titleHighlight: "SO2 Sensor",
            description:
                "The Prana Air SO2 sensor is designed with great accuracy and quality for both industrial and home safety monitoring. It uses electrochemical technology to detect harmful sulfur dioxide (SO2) gas.This sensor is small, lightweight, and affordable, making it easy to use in different monitoring and safety systems. It is durable, lasts a long time, and can be used in a variety of settings, including factories, businesses, and homes. ",

            specs: {
                resolution: { label: "Resolution", value: "0.1 PPM" },
                range: { label: "Range", value: "50 PPM" },
            },
            sensorImages: {
                variantA: "/img/so2-sensor-pcb.webp",
                variantB: "/img/so2-sensor-inbuilt-pcb.webp",
            },
            whyChooseFeatures: [
                {
                    icon: "/img/Compact.png",
                    title: "Miniature Size",
                    description: "Ultra-compact design for space-constrained applications",
                    iconAlt: "Compact Icon",
                },
                {
                    icon: "/img/durable.webp",
                    title: "Weather Resistant",
                    description: "Designed for outdoor environmental monitoring",
                    iconAlt: "Durable Icon",
                },
                {
                    icon: "/img/highly-responsive.webp",
                    title: "Real-time Detection",
                    description: "Instant NO2 level monitoring",
                    iconAlt: "Responsive Icon",
                },
                {
                    icon: "/img/energy-efficient.webp",
                    title: "Battery Friendly",
                    description: "Optimized for battery-powered devices",
                    iconAlt: "Energy Efficient Icon",
                },
                {
                    icon: "/img/individually-calibrated.webp",
                    title: "Factory Tested",
                    description: "Each sensor individually tested and calibrated",
                    iconAlt: "Calibrated Icon",
                },
                {
                    icon: "/img/rohs-compliance.webp",
                    title: "Eco-Friendly",
                    description: "RoHS compliant and environmentally safe",
                    iconAlt: "RoHS Icon",
                },
            ],
        },

        calibration: {
            title: "NO2 Sensor Calibration Guide",
            description: "Step-by-step calibration process to ensure accurate NO2 measurements in your application.",
            videoImage: "/img/so2-sensor-calibration.webp",
            videoAlt: "NO2 Sensor Calibration Guide",
        },

        technology: {
            title: "Advanced Sensing Technology",
            subtitle: "Electrochemical Detection",
            learnMoreLink: "#",
        },

        whatIsSection: {
            title: "What is Nitrogen Dioxide (NO2)?",
            description:
                "Sulfur dioxide (SO₂) is a toxic gas with a strong, burnt smell. Its odor is sharp and irritating, though it is not the same as nitric acid. SO₂ is an acidic and corrosive gas. When it reacts with other substances in the air, it can form harmful compounds like sulfuric acid and sulfate pollutants, which contribute to air pollution and acid rain. The main sources of SO₂ include burning fossil fuels, power plants, metal extraction, industrial processes, volcanoes, vehicle emissions, oil refining, and diesel engines. However, the Indian government's move toward BSVI-compliant engines has helped reduce SO₂ emissions from vehicles.",
            image: "/img/ammonia-source.webp",
            imageAlt: "NO2 Pollution Sources",
        },

        lightMode: {
            title: "Electrochemical Technology",
            description:
                "The SO2 sensor uses electrochemical gas sensing technology to detect sulfur dioxide in the air. Our monitors use a special sensor to detect sulfur dioxide (SO2), a harmful gas found in the air. This SO2 sensor works using a simple chemical process. It has two key parts called electrodes and a special material that connects them. When SO2 enters the sensor, a chemical reaction happens. This reaction creates a tiny electric current. The more SO2 in the air, the stronger the current.By measuring this current, our sensor tells us exactly how much SO2 is present. This helps in tracking air pollution and keeping the air cleaner and safer for everyone.",
            image: "/img/what-technology-is-being-used.webp",
            imageAlt: "Electrochemical Technology",
        },

        sensorChip: {
            title: "NO2 Detection Module",
            description: "High-performance electrochemical cell with integrated electronics for precise NO2 measurement.",
            image: "/img/sensor-chip.webp",
            imageAlt: "NO2 Detection Module",
            buyNowLink: "#",
        },

        applications: {
            title: "Applications of SO2 Sensor",
            items: [
                {
                    id: 1,
                    image: "/img/aerial-top-view-shot-hong-kong-cityscape.webp",
                    title: "Air Quality Stations",
                    alt: "Air Quality Monitoring Station",
                },
                {
                    id: 2,
                    image: "/img/young-woman-using-home-technology.webp",
                    title: "Traffic Pollution Monitoring",
                    alt: "Traffic Pollution",
                },
                {
                    id: 3,
                    image: "/img/close-up-heat-pump-outside-home.webp",
                    title: "Industrial Emission Control",
                    alt: "Industrial Emissions",
                },
                {
                    id: 4,
                    image: "/img/foggy-day-with-smoke-coming-out-chimney.webp",
                    title: "Urban Environment Monitoring",
                    alt: "Urban Environment",
                },
            ],
        },

        technicalSpecs: {
            title: "Technical Specifications",
            variants: {
                variantA: "Standard Range",
                variantB: "Extended Range",
            },
            specs: {
                productName: { label: "Product Name", value: "NO2 Sensor" },
                resolution: { label: "Resolution", value: "0.1 PPM" },
                responseTime: { label: "Response Time", value: "< 60 seconds" },
                operatingTemp: { label: "Operating Temperature", value: "-20°C to +50°C" },
                operatingHumidity: { label: "Operating Humidity", value: "15-90% RH" },
                measurementRange: { label: "Measurement Range", value: "0-20 PPM" },
                repeatability: { label: "Repeatability", value: "±3% of reading" },
                sensitivity: { label: "Sensitivity", value: "0.1 PPM" },
                operatingVoltage: { label: "Operating Voltage", value: "3.3V" },
                powerConsumption: { label: "Power Consumption", value: "< 10mA" },
            },
            images: {
                variantA: "/img/so2-sensor-vaiant.webp",
                variantB: "/img/tech-spec-variant.webp",
            },
        },

        gallery: {
            title: "NO2 Sensor",
            titleHighlight: "Product Gallery",
            description: "Detailed views of our NO2 sensor showing its professional design and build quality.",
            images: ["/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp", "/img/sensors-gallery-img.webp"],
        },

        contact: {
            title: "Technical Support",
            description: "Need help with NO2 sensor integration? Our engineers are here to assist you.",
        },

        relatedProducts: {
            title: "Related Gas Sensors",
            items: [
                {
                    id: 1,
                    name: "CO2 Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "CO2 Sensor",
                    link: "/sensors/co2",
                },
                {
                    id: 2,
                    name: "SO2 Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "SO2 Sensor",
                    link: "/sensors/so2",
                },
                {
                    id: 3,
                    name: "O3 Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "Ozone Sensor",
                    link: "/sensors/ozone",
                },
                {
                    id: 4,
                    name: "CO Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "CO Sensor",
                    link: "/sensors/co",
                },
                {
                    id: 5,
                    name: "SO2 Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "SO2 Sensor",
                    link: "/sensors/so2",
                },
                {
                    id: 6,
                    name: "O3 Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "Ozone Sensor",
                    link: "/sensors/ozone",
                },
                {
                    id: 7,
                    name: "CO Sensor",
                    image: "/img/ethanol-sensor.webp",
                    alt: "CO Sensor",
                    link: "/sensors/co",
                }
            ],
        },
    }

    return <SensorPageTemplate {...sensorData} />
}
